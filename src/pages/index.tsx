import React from 'react'

import { AppBarLayout } from '../components'
import {
  Wrapper,
  TitleBlock,
  TitleBlockBackground,
} from '../components/landing/landing.styles'

export default () => (
  <AppBarLayout title="Home" fullPageContent>
    <TitleBlock>
      BLOCKS DIRECTORY
      <TitleBlockBackground src="/title_block_background.png" />
    </TitleBlock>
    <Wrapper>
        Landing Goes Here
    </Wrapper>
  </AppBarLayout>
)
