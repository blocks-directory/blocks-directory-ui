import React, { useState } from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'
import { EmbedContainer } from './landing.styles'
import { OpacityAppear } from '../opacity-appear.component'

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(50%); 
  background: linear-gradient(180deg, #FFFFFF -28.01%, #D9E8FF 250.27%);
  box-shadow: 0px 1px 4px rgba(100, 129, 170, 0.18), 0px 35px 50px rgba(92, 131, 192, 0.2);
  max-width: 720px;
  width: calc(100% - 40px);
`
const YouTubeVideo = styled(YouTube)`
  width: 100%;
  height: 100%;
`

export const VideoBlock = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <Wrapper>
      <OpacityAppear visible={videoLoaded}>
        <EmbedContainer>
          <YouTubeVideo
            videoId="YrdxCnlO5hM"
            onReady={() => {
              setVideoLoaded(true)
            }}
          />
        </EmbedContainer>
      </OpacityAppear>
    </Wrapper>
  )
}
