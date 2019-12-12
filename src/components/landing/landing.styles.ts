import styled from 'styled-components'

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
  max-height: 50vh;
  min-height: 50vh;
  background: ${(p) => p.theme.palette.primary.main} url("/title_block_background.png") center 0 no-repeat;
  background-size: cover;
  clip-path: ellipse(120% 90% at top);
  z-index: 1;
  @media (max-width: 800px) {
    clip-path: ellipse(170% 90% at top);
  }
`
