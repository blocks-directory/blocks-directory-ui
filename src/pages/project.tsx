import React from 'react'
import styled from 'styled-components'
import { Router } from '@reach/router'
import { useQuery } from '@apollo/react-hooks'
import { Chip, Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { DateTime } from 'luxon'
import { ExternalLink } from 'react-feather'
import { capitalize, upperCase } from 'lodash-es'

import { AppBarLayout } from '../components'
import { getProjectById as Project } from '../graphql/queries/types/getProjectById'
import { getProjectById } from '../graphql/queries'

const Wrapper = styled.div`
  padding: 20px 0;
`
const Title = styled(Typography)`
  color: black;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 10px;
`
const Tag = styled(Chip)`
  margin-right: 10px;
  font-size: 16px;
  line-height: 20px;
  height: 36px;
  border-radius: 10px;
  background: #F3F4F5;
  .MuiChip-label {
    padding: 0 18px;
  }
`

const ProjectPage = ({ projectId }: any) => {
  const { data, loading } = useQuery<Project>(getProjectById,
    { variables: { id: projectId } })

  const {
    name, lastCommitDate, runtime, provider, readmeUrl, platform, repositoryUrl, openIssues, pullRequests,
  } = data?.getProjectById ?? {} as any

  console.log(data?.getProjectById)

  return (
    <AppBarLayout title="">
      <Wrapper>
        {loading && (
          <>
            <Skeleton animation="wave" width={210} />
            <Skeleton animation="wave" width={210} />
            <Skeleton animation="wave" width={210} />
            <Skeleton animation="wave" width={210} />
          </>
        )}
        {!loading && (
          <div>
            <Title>{name}</Title>
            <Typography variant="caption">
              Last commit {DateTime.fromISO(lastCommitDate).toRelative()}
            </Typography>

            <div>
              Type: <Tag label={capitalize(platform)} />
              Repository: <a href={repositoryUrl} rel="noopener noreferrer" target="_blank">github <ExternalLink /></a>
            </div>
            <div>
              Runtime: <Tag label={capitalize(runtime)} />
              Open issues: {openIssues}
            </div>
            <div>
              Provider: <Tag label={upperCase(provider)} />
              Pull requests: {pullRequests}
            </div>
          </div>
        )}
      </Wrapper>
    </AppBarLayout>
  )
}

export default () => (
  <Router>
    <ProjectPage path="/project/:projectId" />
  </Router>
)
