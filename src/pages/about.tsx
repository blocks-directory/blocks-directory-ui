import React from 'react'
import styled from 'styled-components'

import { AppBarLayout } from '../components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 64px);
  padding: 0 20px;
  align-items: center;
  justify-content: center;
`

export default () => (
  <AppBarLayout title="About">
    <Wrapper>
      <pre>
        About
      </pre>
    </Wrapper>
  </AppBarLayout>
)
