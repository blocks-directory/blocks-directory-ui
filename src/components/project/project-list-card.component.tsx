import React, { memo } from 'react'
import styled from 'styled-components'
import { Card, Chip, IconButton, Typography } from '@material-ui/core'
import { DateTime } from 'luxon'
import { capitalize, upperCase } from 'lodash-es'

import GitHubIcon from '@material-ui/icons/GitHub'

import { findProjects_findProjects as Project } from '../../graphql/queries/types/findProjects'

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
  margin: 16px 0 16px -4px;
  flex-wrap: wrap;
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
const RepositoryLink = styled(IconButton as any)`
  max-height: 48px;
  margin-top: -10px;
  color: black;
`

type ProjectListCardProps = {
  project: Project
}

export const ProjectListCard = memo(({ project }: ProjectListCardProps) => (
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
        <Typography variant="caption">
          Last commit {DateTime.fromISO(project.lastCommitDate!).toRelative()}
        </Typography>
      </div>
    </LeftContent>
    <RepositoryLink>
      <GitHubIcon />
    </RepositoryLink>
  </Wrapper>
))
