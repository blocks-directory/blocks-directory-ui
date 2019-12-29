import React, { useCallback, useState } from 'react'
import YouTube from 'react-youtube'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import { useSpring, animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops.cjs'

import {
  AppBarLayout,
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
  DownloadMicroserviceIcon,
  WhiteBackgroundFeature,
  ShareMicroservicesIcon,
  CommunityHeader,
  SocialButtons,
  Email,
  SocialButton,
  SearchBar,
  Stars,
} from '../components'

const YouTubeVideo = styled(YouTube)`
  width: 100%;
  height: 100%;
`

export default () => {
  const [query, setQuery] = useState('')
  const goToSearch = useCallback(() => {
    navigate(`/app/projects/${query}`)
  }, [query])

  const [youtubeVideoStyle, setYouTubeVideoProps] = useSpring(() => ({
    opacity: 0,
    config: {
      duration: 500,
    },
  }))

  return (
    <AppBarLayout title="Home" fullPageContent>
      <TitleBlock>
        <TitleBlockContent>
          <Stars />
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{
              duration: 200,
            }}
          >
            {(props) => (
              <ProjectName variant="h2" style={props}>
                Blocks Directory
              </ProjectName>
            )}
          </Spring>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{
              duration: 200,
              delay: 100,
            }}
          >
            {(props) => (
              <ProjectDescription variant="h4" style={props}>
                A directory of high-quality open-source microservices.
              </ProjectDescription>
            )}
          </Spring>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{
              duration: 200,
              delay: 200,
            }}
          >
            {(props) => (
              <SearchRow style={props}>
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
            )}
          </Spring>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{
              duration: 200,
              delay: 300,
            }}
          >
            {(props) => (
              <VideoBlock style={props}>
                <animated.div style={youtubeVideoStyle}>
                  <EmbedContainer>
                    <YouTubeVideo
                      videoId="RnDC9MXSqCY"
                      onReady={() => setYouTubeVideoProps({ opacity: 1 })}
                    />
                  </EmbedContainer>
                </animated.div>
              </VideoBlock>
            )}
          </Spring>
        </TitleBlockContent>
      </TitleBlock>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{
          duration: 200,
          delay: 400,
        }}
      >
        {(props) => (
          <FeaturesBlock style={props}>
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
        )}
      </Spring>
      <BlueBackgroundFeature>
        <Stars />
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
      <BlueBackgroundFeature>
        <CommunityHeader>
          Join the community
        </CommunityHeader>
        <SocialButtons>
          <SocialButton icon="/slack.svg" url="https://google.com" />
        </SocialButtons>
        <Email>
          Have more questions? Contact us at <a href="mailto:contact@blocks.directory">contact@blocks.directory</a>
        </Email>
      </BlueBackgroundFeature>
    </AppBarLayout>
  )
}
