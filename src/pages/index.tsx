import React, { useCallback, useState } from 'react'
import YouTube from 'react-youtube'
import styled from 'styled-components'
import Router from 'next/router'

import { AppBarLayout } from '../components'
import {
  TitleBlock,
  ProjectName,
  TitleBlockContent,
  ProjectDescription,
  SearchBarWrapper,
  SearchRow,
  SearchButton,
  VideoBlock,
  EmbedContainer,
  FeaturesBlock,
  Features,
  FeatureBlock,
  FeatureLeftBlock,
  FeatureTitle,
  FeatureDescription,
  FeatureIcon,
  BlueBackgroundFeature,
  FeatureDescriptionWhite,
  FeatureTitleWhite,
  DownloadMicroserviceIcon, WhiteBackgroundFeature, ShareMicroservicesIcon,
} from '../components/landing/landing.styles'
import { SearchBar } from '../components/search-bar/search-bar.component'

const YouTubeVideo = styled(YouTube)`
  width: 100%;
  height: 100%;
`

export default () => {
  const [query, setQuery] = useState('')
  const goToSearch = useCallback(() => {
    Router.push({
      pathname: '/projects',
      query: { query },
    })
  }, [query])

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
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    goToSearch()
                  }
                }}
              />
            </SearchBarWrapper>
            <SearchButton
              variant="extended"
              onClick={goToSearch}
            >
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
        {/* <TitleBlockBackground /> */}
      </TitleBlock>
      <FeaturesBlock>
        <Features>
          Features
        </Features>
        <FeatureBlock>
          <FeatureLeftBlock>
            <FeatureTitle>
              Save time by reusing the microservices
            </FeatureTitle>
            <FeatureDescription>
              Microservices are isolated, and that’s what makes them easy to reuse.
              Solve your problem with a ready-made microservice
              and use saved time to do meaningful work.
            </FeatureDescription>
          </FeatureLeftBlock>
          <DownloadMicroserviceIcon src="/download-microservice.svg" />
        </FeatureBlock>
      </FeaturesBlock>
      <BlueBackgroundFeature>
        <FeatureBlock>
          <FeatureLeftBlock>
            <FeatureTitleWhite>
              Bringing the communities together
            </FeatureTitleWhite>
            <FeatureDescriptionWhite>
              Microservices communicate through APIs.
              That makes it easy to use services written in
              different languages and technologies.
            </FeatureDescriptionWhite>
          </FeatureLeftBlock>
          <FeatureIcon src="/communities-together.svg" />
        </FeatureBlock>
      </BlueBackgroundFeature>
      <WhiteBackgroundFeature>
        <FeatureBlock>
          <FeatureLeftBlock>
            <FeatureTitle>
              Give back by contributing
            </FeatureTitle>
            <FeatureDescription>
              Share your own microservices or contribute to
              the projects shared by others to make
              them better for everyone.
            </FeatureDescription>
          </FeatureLeftBlock>
          <ShareMicroservicesIcon src="/share-microservices.svg" />
        </FeatureBlock>
      </WhiteBackgroundFeature>
    </AppBarLayout>
  )
}
