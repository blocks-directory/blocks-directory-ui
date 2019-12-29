import React from 'react'
import { Router } from '@reach/router'
import Projects from '../containers/projects'

export default () => (
  <Router>
    <Projects path="/projects" />
  </Router>
)
