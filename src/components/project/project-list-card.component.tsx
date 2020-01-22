import React, { memo } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Card, IconButton, Typography } from '@material-ui/core'
import { DateTime } from 'luxon'
import { capitalize, upperCase } from 'lodash-es'
import GitHubIcon from '@material-ui/icons/GitHub'

import { findProjects_findProjects as Project } from '../../graphql/queries/types/findProjects'
import { Tag } from '../tag.component'

const Wrapper = styled(Card)`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;
`
const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Title = styled(Typography)`
  color: black;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 10px;
`
const Tags = styled.div`
  display: flex;
  margin: 16px 0 0 -4px;
  flex-wrap: wrap;
`
const RepositoryLink = styled(IconButton as any)`
  max-height: 48px;
  margin-top: -10px;
  color: black;
`
const StyledLink = styled(Link)`
  text-decoration: none;
`
const StyledTag = styled(Tag)`
  margin: 0 10px 16px 0;
`

type ProjectListCardProps = {
  project: Project
}

export const ProjectListCard = memo(({ project }: ProjectListCardProps) => (
  <Wrapper>
    <LeftContent>
      <Title>
        <StyledLink to={`/project/${encodeURIComponent(project.id)}`}>{project.name}</StyledLink>
      </Title>
      <div>
        <Typography>{project.description}</Typography>
        <Tags>
          <StyledTag label={capitalize(project.platform!)} />
          <StyledTag label={capitalize(project.runtime!)} />
          <StyledTag label={upperCase(project.provider!)} />
        </Tags>
        <Typography variant="caption">
          Last commit {DateTime.fromISO(project.lastCommitDate!).toRelative()}
        </Typography>
      </div>
    </LeftContent>
    <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
      <RepositoryLink>
        <GitHubIcon />
      </RepositoryLink>
    </a>
  </Wrapper>
))
