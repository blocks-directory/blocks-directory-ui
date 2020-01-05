import React from 'react'
import styled from 'styled-components'
import { AppBar, Toolbar, Slide, Drawer as MaterialDrawer, IconButton } from '@material-ui/core'
import { fade } from '@material-ui/core/styles/colorManipulator'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

import { ButtonLink } from '../button'
import FullLogo from '../../svg/full-logo.svg'

export const mediaQuery = 'max-width: 800px'
const drawerWidth = 240

interface HideOnScrollProps {
  children: React.ReactElement;
}

// we can use it to hide/show appbar onScroll
export const HideOnScroll = ({ children }: HideOnScrollProps) => {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

interface AppBarProps {
  transparent?: boolean
  isMobile?: boolean
  theme: any
}

const getAppBarBackground = (p: AppBarProps) => {
  if (p.isMobile && p.transparent) {
    return `background: ${fade(p.theme.palette.primary.main, 0.85)}`
  }
  if (p.transparent) {
    return 'background: rgba(65, 65, 65, 0.12)'
  }

  return `background: ${p.theme.palette.primary.main} url("/app_bar_bg.png") center 0 no-repeat`
}

export const StyledAppBar = styled(({ transparent, ...props }) => <AppBar {...props} />)<AppBarProps>`
  ${getAppBarBackground};
  background-size: cover;
`
export const Wrapper = styled.div`
  display: flex;
`
export const Drawer = styled(MaterialDrawer)`
  .MuiPaper-root {
    background: ${(p) => `linear-gradient(to bottom, 
      ${p.theme.palette.primary.main}, ${p.theme.palette.secondary.main})`};
    color: white;
    overflow-x: hidden;
    flex-shrink: 0;
    align-items: center;
    white-space: nowrap;
    border: none;
    width: ${drawerWidth}px;
    .MuiSvgIcon-root, .MuiTypography-root {
      color: white;
    }
    .MuiButtonBase-root {
      &:hover {
        background-color: rgba(255, 255, 255, 0.1)
      }
    }
  }
`
export const StyledToolbar = styled(Toolbar)`
  align-items: stretch;
  padding: 0;
`
export const HeaderButton = styled(ButtonLink)`
  color: white;
  padding: 0 16px;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
`
export const LogoButton = styled(HeaderButton)`
  padding: 0 16px 0 0;
`
export const Logo = styled.div`
  background: url('${FullLogo}') no-repeat center center;
  background-size: contain;
  height: 50px;
  width: 170px;
`
export const Flex = styled.div`
  flex: 1;
`
export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
`
export const HeaderList = styled.div`
  display: flex;
  flex-direction: row;
`
export const Divider = styled.div`
  width: 2px;
  margin: 12px 0;
  background: rgba(255, 255, 255, 0.2);
`
export const MenuButton = styled(IconButton)`
  color: white;
`
