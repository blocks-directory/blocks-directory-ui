import React from 'react'
import styled from 'styled-components'
import { Card, Chip, Typography } from '@material-ui/core'
import { DateTime } from 'luxon'
import { capitalize } from 'lodash-es'

import { findProjects_findProjects as Project } from '../../graphql/queries/types/findProjects'

const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 160px;
  padding: 20px;
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

type ProjectListCardProps = {
  project: Project
}

export const ProjectListCard = ({ project }: ProjectListCardProps) => (
  <Wrapper>
    <Title>{project.name}</Title>
    <div>
      <Typography>{project.description}</Typography>
      <Tags>
        <Tag label={capitalize(project.platform!)} />
        <Tag label={capitalize(project.runtime!)} />
        <Tag label={capitalize(project.provider!)} />
      </Tags>
      <Typography color="textSecondary" variant="caption">
        Last commit {DateTime.fromISO(project.lastCommitDate!).toRelative()}
      </Typography>
    </div>
  </Wrapper>
)
