import styled from 'styled-components'
import { Typography, Fab } from '@material-ui/core'

export const Wrapper = styled.div`
  padding: 20px 0;
`

export const TitleBlock = styled.div`
  margin-top: -64px;
  width: 100%;
  background-size: cover;
`

export const SearchBarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  max-width: 600px;
`

export const TitleBlockContent = styled.div`
  position: relative;
  background: linear-gradient(322.36deg, #01E1F7 0.58%, #203BDD 112.86%);
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
  margin-bottom: 80px;
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
  margin-bottom: 300px;
  @media (max-width: 650px) {
    margin-bottom: 200px;
  }
  @media (max-width: 400px) {
    margin-bottom: 100px;
  }
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

export const FeaturesBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: url("/white-background.svg") center 0 no-repeat;
  background-size: cover;
`

export const Features = styled.div`
  color: #333333;
  background: url("/features.svg") center 0 no-repeat;
  background-size: cover;
  max-width: 570px;
  width: 100%;
  height: 88px;
  font-weight: bold;
  font-size: 36px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 275px;
  margin-bottom: 75px;
  @media (max-width: 950px) {
    margin-bottom: 40px;
  }
  @media (max-width: 650px) {
    margin-top: 200px;
  }
  @media (max-width: 400px) {
    margin-top: 100px;
  }
`

export const FeatureBlock = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  width: 100%;
  margin-bottom: 150px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 950px) {
    flex-direction: column-reverse;
    margin-bottom: 50px
  }
`

export const BlueBackgroundFeature = styled.div`
  position: relative;
  background: linear-gradient(322.36deg, #01E1F7 0.58%, #203BDD 112.86%);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 150px 20px 0 20px;
  @media (max-width: 950px) {
    padding: 50px 20px 0 20px;
  }
`

export const WhiteBackgroundFeature = styled(BlueBackgroundFeature)`
  background: linear-gradient(180deg, #FFFFFF 10.82%, #D9E8FF 150.43%), #ECF3FF;  
`

export const FeatureLeftBlock = styled.div`
  margin: 0 10px;
  @media (min-width: 951px) {
    max-width: 650px;
  }
`

export const FeatureTitle = styled.div`
  font-size: 36px;
  margin-bottom: 40px;
  color: #333333;
`

export const FeatureTitleWhite = styled(FeatureTitle)`
  color: white;
`

export const FeatureDescription = styled.div`
  font-size: 24px;
  color: #333333;
`

export const FeatureDescriptionWhite = styled(FeatureDescription)`
  color: white;
`

export const FeatureIcon = styled.img`
  margin: 0 10px;
  @media (max-width: 950px) {
    margin-bottom: 40px;
  }
`

export const DownloadMicroserviceIcon = styled(FeatureIcon)`
  margin: 0 10px;
  padding: 0 62px;
`

export const ShareMicroservicesIcon = styled(FeatureIcon)`
  margin: 0 10px;
  padding: 0 62px;
`

export const CommunityHeader = styled.div`
  font-weight: 500;
  font-size: 36px;
  color: #FFFFFF;
  margin-bottom: 40px;
`

export const SocialButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`

export const Email = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #FFFFFF;
  margin-bottom: 150px;
  @media (max-width: 950px) {
    margin-bottom: 50px;
  }
`
