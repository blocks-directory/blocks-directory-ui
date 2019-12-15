import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import { Fab } from '@material-ui/core'

export const Wrapper = styled.div`
  padding: 20px 0;
`

export const TitleBlock = styled.div`
  margin-top: -64px;
  width: 100%;
  background: white;
  max-height: 30vh;
  background-size: cover;
  position: relative;
`

export const TitleBlockBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 80vh;
  min-height: 930px;
  background: ${(p) => p.theme.palette.primary.main} url("/title_block_background.png") center 0 no-repeat;
  background-size: cover;
  clip-path: ellipse(120% 90% at top);
  z-index: 1;
  @media (max-width: 800px) {
    clip-path: ellipse(170% 90% at top);
  }
`

export const SearchBarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  max-width: 600px;
`

export const TitleBlockContent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 108px 20px 20px 20px;
`

export const ProjectName = styled(Typography)`
  margin: 80px 0;
  color: white;
  text-align: center;
`

export const ProjectDescription = styled(Typography)`
  color: white;
  margin-bottom: 100px;
  text-align: center;
`

export const SearchRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  max-width: 900px;
`

export const SearchButton = styled(Fab)`
  margin: 20px 10px;
  color: white;
  font-weight: bold;
  font-size: 24px;
  box-shadow: 0 4px 12px rgba(23, 20, 43, 0.2);
  background: linear-gradient(94.33deg, #03C6FB -36.65%, #2FF6F5 99.37%);
  text-shadow: 0 2px 4px rgba(0, 26, 94, 0.38);
  letter-spacing: 2px;
  border-radius: 45px;
  width: 264px;
  height: 60px;
`

export const VideoBlock = styled.div`
  background: linear-gradient(180deg, #FFFFFF -28.01%, #D9E8FF 250.27%);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 720px;
  width: 100%;
  margin-top: 150px;
`

export const EmbedContainer = styled.div`
  position: relative; 
  padding-bottom: 56.25%; 
  height: 0; 
  overflow: hidden; 
  max-width: 100%;
  iframe {
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%;
  }
`
