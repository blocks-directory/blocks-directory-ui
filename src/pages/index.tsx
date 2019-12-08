import React from 'react'
import styled from 'styled-components'


import { AppBarLayout, } from '../components'

const Wrapper = styled.div`
  padding: 20px 0;
`

export default () => {
  return (
    <AppBarLayout title="Home">
      <Wrapper>
        Landing Goes Here
      </Wrapper>
    </AppBarLayout>
  )
}
