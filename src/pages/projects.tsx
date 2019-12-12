import React, { useState } from 'react'
import styled from 'styled-components'
import { useDebounce } from 'react-use'
import { InputAdornment, TextField, FormControl, CircularProgress } from '@material-ui/core'
import { useQuery } from '@apollo/client'
import { isEmpty, map } from 'lodash-es'

import SearchIcon from '@material-ui/icons/Search'

import { AppBarLayout, ProjectListCard } from '../components'
import { projectsList } from '../graphql'
import { findProjects as Projects } from '../graphql/queries/types/findProjects'

const Wrapper = styled.div`
  padding: 20px 0;
`
const NoContentHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  height: 160px;
  width: 100%;
`
const ProjectList = styled.div`
  margin-top: 20px;
`

export default () => {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = React.useState(query)
  const { data, loading } = useQuery<Projects>(projectsList,
    { variables: { query: debouncedQuery }, fetchPolicy: 'network-only' })

  useDebounce(() => setDebouncedQuery(query), 300, [query])

  const projects = data?.findProjects || []

  return (
    <AppBarLayout title="Projects">
      <Wrapper>
        <TextField
          label="Search"
          variant="filled"
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <FormControl />
        {loading && (
          <NoContentHolder>
            <CircularProgress />
          </NoContentHolder>
        )}
        {!loading && isEmpty(projects) && (
          <NoContentHolder>0 projects found</NoContentHolder>
        )}
        {!loading && !isEmpty(projects) && (
          <ProjectList>
            {map(projects, (project) => (
              <ProjectListCard key={project.id!} project={project} />
            ))}
          </ProjectList>
        )}
      </Wrapper>
    </AppBarLayout>
  )
}