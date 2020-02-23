import React, { useCallback, useState } from 'react'
import { navigate } from '@reach/router'
import { graphql, useStaticQuery } from 'gatsby'

import { CSSTransition } from 'react-transition-group'
import {
  AppBarLayout,
  TitleBlock,
  ProjectName,
  TitleBlockContent,
  ProjectDescription,
  SearchBarWrapper,
  SearchRow,
  SearchButton,
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
  VideoBlock,
} from '../components'
import { getEnvConfig } from '../configs'
import { OpacityAppear } from '../components/opacity-appear.component'

const envQuery = graphql`{
  site {
    siteMetadata {
      env
    }
  }
}`


export default () => {
  const [query, setQuery] = useState('')
  const goToSearch = useCallback(() => {
    navigate(`/projects?query=${query}`)
  }, [query])

  const data = useStaticQuery(envQuery)

  return (
    <AppBarLayout title="Home" fullPageContent>
      <TitleBlock>
        <TitleBlockContent>
          <Stars />
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
              <OpacityAppear visible={!!query}>
                {query && 'Search'}
              </OpacityAppear>
              <OpacityAppear visible={!query}>
                {!query && 'Browse'}
              </OpacityAppear>
            </SearchButton>
          </SearchRow>
          <VideoBlock />
        </TitleBlockContent>
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
          <SocialButton
            icon="/slack.svg"
            url={getEnvConfig(data.site.siteMetadata.env).joinSlackLink}
          />
        </SocialButtons>
        <Email>
          Have more questions? Contact us at <a href="mailto:contact@blocks.directory">contact@blocks.directory</a>
        </Email>
      </BlueBackgroundFeature>
    </AppBarLayout>
  )
}
