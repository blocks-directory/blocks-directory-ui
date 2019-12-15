import React, { useState } from 'react'
import YouTube from 'react-youtube'
import styled from 'styled-components'

import { AppBarLayout } from '../components'
import {
  Wrapper,
  TitleBlock,
  TitleBlockBackground,
  ProjectName,
  TitleBlockContent,
  ProjectDescription,
  SearchBarWrapper,
  SearchRow,
  SearchButton,
  VideoBlock,
  EmbedContainer,
} from '../components/landing/landing.styles'
import { SearchBar } from '../components/search-bar/search-bar.component'

const YouTubeVideo = styled(YouTube)`
  width: 100%;
  height: 100%;
`

export default () => {
  const [query, setQuery] = useState('')

  return (
    <AppBarLayout title="Home" fullPageContent>
      <TitleBlock>
        <TitleBlockContent>
          <ProjectName variant="h2">
            Blocks Directory
          </ProjectName>
          <ProjectDescription variant="h4">
            A directory of high-quality open-source microservices.
          </ProjectDescription>
          <SearchRow>
            <SearchBarWrapper>
              <SearchBar
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </SearchBarWrapper>
            <SearchButton variant="extended">
              Search
            </SearchButton>
          </SearchRow>
          <VideoBlock>
            <EmbedContainer>
              <YouTubeVideo
                videoId="RnDC9MXSqCY"
              />
            </EmbedContainer>
          </VideoBlock>
        </TitleBlockContent>
        <TitleBlockBackground />
      </TitleBlock>
      <Wrapper>
        Landing Goes Here
      </Wrapper>
    </AppBarLayout>
  )
}
