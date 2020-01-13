import React from 'react'
import styled from 'styled-components'
import { Router } from '@reach/router'

import { AppBarLayout } from '../components'

const Wrapper = styled.div`
  padding: 20px 0;
`

const ProjectPage = ({ projectId }: any) => (
  <AppBarLayout title="">
    <Wrapper>
      id: {projectId}
    </Wrapper>
  </AppBarLayout>
)

export default () => (
  <Router>
    <ProjectPage path="/project/:projectId" />
  </Router>
)
