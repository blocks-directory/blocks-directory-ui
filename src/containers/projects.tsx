import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { useDebounce } from 'react-use'
import { FormControl, CircularProgress } from '@material-ui/core'
import { useQuery } from '@apollo/client'
import { isEmpty, map, get } from 'lodash-es'
import { navigate } from '@reach/router'
import InfiniteScroll from 'react-infinite-scroll-component'
import queryString from 'query-string'

import { AppBarLayout, ProjectListCard, SearchBar } from '../components'
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
const StyledSearchBar = styled(SearchBar)`
  background: #F3F4F5;
`
const LoaderWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ProjectsPage = ({ location }: any) => {
  const debouncedQuery = get(queryString.parse(location.search), 'query', '') as string
  const [query, setQuery] = useState(debouncedQuery)
  const [loadingMore, setLoadingMore] = useState(false)
  const { data, fetchMore, loading } = useQuery<Projects>(projectsList,
    { variables: { query: debouncedQuery } })
  const [hasMore, setHasMore] = useState<{ [key: string]: boolean }>({})

  const currentQueryHasMore = hasMore[query] == null ? true : hasMore[query]

  const loadMore = useCallback(() => {
    if (loadingMore) {
      return {}
    }

    setLoadingMore(true)

    return fetchMore({
      variables: {
        offset: get(data, 'findProjects.length'),
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev

        if (fetchMoreResult.findProjects.length < 20) {
          setHasMore({
            ...hasMore,
            [query]: false,
          })
        }

        return { ...prev, findProjects: [...prev.findProjects, ...fetchMoreResult.findProjects] }
      },
    }).then(() => {
      setLoadingMore(false)
    })
  }, [data, loadingMore])

  useDebounce(() => {
    navigate(`/app/projects?query=${query}`)
  }, 700, [query])

  const projects = data?.findProjects || []

  return (
    <AppBarLayout title="Search Services">
      <Wrapper>
        <StyledSearchBar
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
          <InfiniteScroll
            next={loadMore}
            hasMore={currentQueryHasMore}
            loader={loadingMore && <LoaderWrapper><CircularProgress /></LoaderWrapper>}
            dataLength={projects.length}
            scrollThreshold="40%"
          >
            <ProjectList>
              {map(projects, (project) => (
                <ProjectListCard key={project.id!} project={project} />
              ))}
            </ProjectList>
          </InfiniteScroll>
        )}
      </Wrapper>
    </AppBarLayout>
  )
}

export default ProjectsPage
