import React from 'react'
import styled from 'styled-components'
import { Router } from '@reach/router'
import { useQuery } from '@apollo/react-hooks'
import { Box, Chip, Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { DateTime } from 'luxon'
import { ExternalLink } from 'react-feather'
import { capitalize, upperCase } from 'lodash-es'

import { AppBarLayout, MdViewer } from '../components'
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
const MetaInfo = styled.div`
  display: grid;
  grid-template-columns: 80px 150px 100px 100px;
  grid-gap: 15px;
  margin-top: 20px;
`
const InfoTitle = styled.div`
  margin-right: 10px;
`
const ExternalLinkIcon = styled(ExternalLink)`
  max-width: 15px;
  max-height: 15px;
`

const ProjectPage = ({ projectId }: any) => {
  const { data, loading } = useQuery<Project>(getProjectById,
    { variables: { id: projectId } })

  const {
    name, lastCommitDate, runtime, provider, readmeUrl, platform, repositoryUrl, openIssues, pullRequests,
  } = data?.getProjectById ?? {} as any

  return (
    <AppBarLayout title="">
      <Wrapper>
        {loading && (
          <>
            <Skeleton animation="wave" width={210} />
            <Skeleton animation="wave" width={210} />
            <Box mt={2}>
              <Skeleton animation="wave" width={470} height={170} variant="rect" />
            </Box>
          </>
        )}
        {!loading && (
          <div>
            <Title>{name}</Title>
            <Typography variant="caption">
              Last commit {DateTime.fromISO(lastCommitDate).toRelative()}
            </Typography>

            <MetaInfo>
              <InfoTitle>Type</InfoTitle>
              <Tag label={capitalize(platform)} />

              <InfoTitle>Repository</InfoTitle>
              <a href={repositoryUrl} rel="noopener noreferrer" target="_blank">
                github <ExternalLinkIcon />
              </a>

              <InfoTitle>Runtime</InfoTitle>
              <div><Tag label={capitalize(runtime)} /></div>

              <InfoTitle>Open issues </InfoTitle>
              {openIssues}

              <InfoTitle>Provider </InfoTitle>
              <div><Tag label={upperCase(provider)} /></div>

              <InfoTitle>Pull requests </InfoTitle>
              {pullRequests}
            </MetaInfo>
            <MdViewer url={readmeUrl} />
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
