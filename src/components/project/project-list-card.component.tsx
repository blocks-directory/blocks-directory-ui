import React from 'react'
import styled from 'styled-components'
import { Card, Chip, IconButton, Typography } from '@material-ui/core'
import { DateTime } from 'luxon'
import { capitalize, upperCase } from 'lodash-es'

import GitHubIcon from '@material-ui/icons/GitHub'

import { findProjects_findProjects as Project } from '../../graphql/queries/types/findProjects'


const Wrapper = styled(Card)`
  display: flex;
  justify-content: space-between;
  height: 160px;
  padding: 20px;
`
const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Title = styled(Typography)`
  color: black;
  font-weight: bold;
`
const Tags = styled.div`
  display: flex;
  margin: 10px 0 10px -4px;
`
const Tag = styled(Chip)`
  margin-right: 8px;
`
const RepositoryLink = styled(IconButton as any)`
  max-height: 48px;
  margin-top: -10px;
  color: black;
`

type ProjectListCardProps = {
  project: Project
}

export const ProjectListCard = ({ project }: ProjectListCardProps) => (
  <Wrapper>
    <LeftContent>
      <Title>{project.name}</Title>
      <div>
        <Typography>{project.description}</Typography>
        <Tags>
          <Tag label={capitalize(project.platform!)} />
          <Tag label={capitalize(project.runtime!)} />
          <Tag label={upperCase(project.provider!)} />
        </Tags>
        <Typography color="textSecondary" variant="caption">
          Last commit {DateTime.fromISO(project.lastCommitDate!).toRelative()}
        </Typography>
      </div>
    </LeftContent>
    <RepositoryLink component="a" href={project.repositoryUrl} target="_blank">
      <GitHubIcon />
    </RepositoryLink>
  </Wrapper>

)
