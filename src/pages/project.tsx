import React from 'react'
import styled from 'styled-components'
import { Router } from '@reach/router'
import { useQuery } from '@apollo/react-hooks'
import { Box, Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { DateTime } from 'luxon'
import { ExternalLink } from 'react-feather'
import { capitalize, upperCase } from 'lodash-es'

import { AppBarLayout, MdViewer } from '../components'
import { getProjectById as Project } from '../graphql/queries/types/getProjectById'
import { getProjectById } from '../graphql/queries'
import { Tag } from '../components/tag.component'

const Wrapper = styled.div`
  padding: 30px 0;
`
const Title = styled(Typography)`
  color: black;
  font-weight: bold;
  font-size: 24px;
  line-height: 22px;
  margin-bottom: 10px;
`
const MetaInfo = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 110px 150px;
  margin-bottom: 15px;
`
const InfoTitle = styled.div`
  height: 36px;
  margin-right: 10px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 110px;
  color: rgba(0, 0, 0, 0.6);
`
const InfoValue = styled.div`
  height: 36px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-weight: 500;
  width: 150px;
  color: #000000;
`
const RepositoryUrl = styled.a`
  height: 100%;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-weight: 500;
  color: #000000;
  text-decoration: none;
`
const ExternalLinkIcon = styled(ExternalLink)`
  max-width: 15px;
  max-height: 15px;
`
const Row = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const ProjectPage = ({ projectId }: any) => {
  const { data, loading } = useQuery<Project>(getProjectById,
    { variables: { id: projectId } })

  const {
    name, lastCommitDate, runtime, provider, readmeUrl, platform, repositoryUrl, openIssues, pullRequests,
  } = data?.getProjectById ?? {} as any

  return (
    <AppBarLayout title={name}>
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

            <Row>
              <MetaInfo>
                <InfoTitle>Type</InfoTitle>
                <div><Tag label={capitalize(platform)} /></div>

                <InfoTitle>Runtime</InfoTitle>
                <div><Tag label={capitalize(runtime)} /></div>

                <InfoTitle>Provider</InfoTitle>
                <div><Tag label={upperCase(provider)} /></div>
              </MetaInfo>
              <MetaInfo>
                <InfoTitle>Repository</InfoTitle>
                <RepositoryUrl href={repositoryUrl} rel="noopener noreferrer" target="_blank">
                  <div>github <ExternalLinkIcon /></div>
                </RepositoryUrl>

                <InfoTitle>Open issues</InfoTitle>
                <InfoValue>{openIssues}</InfoValue>

                <InfoTitle>Pull requests</InfoTitle>
                <InfoValue>{pullRequests}</InfoValue>
              </MetaInfo>
            </Row>
            <MdViewer url={readmeUrl} repositoryUrl={repositoryUrl} />
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
