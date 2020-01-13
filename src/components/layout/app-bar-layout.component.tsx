import React, { memo, useCallback, useState } from 'react'
import { Toolbar, Container, useMediaQuery, Box } from '@material-ui/core'
import { Helmet } from 'react-helmet'

import MenuIcon from '@material-ui/icons/Menu'

import { ElevationScroll } from './elevation-scroll.component'
import {
  Wrapper,
  Content,
  Divider,
  Flex,
  HeaderButton,
  HeaderList,
  Logo,
  LogoButton,
  StyledAppBar,
  StyledToolbar,
  Drawer,
  mediaQuery,
  MenuButton,
} from './app-bar-layout.styles'

interface ToolbarLayoutProps {
  children?: JSX.Element | JSX.Element []
  title?: string
  fullPageContent?: boolean
}

export const AppBarLayout = memo(({ children, title = '', fullPageContent }: ToolbarLayoutProps) => {
  const [isOpen, setOpen] = useState(false)
  const isMobile = useMediaQuery(`(${mediaQuery})`)

  const openSidebar = useCallback(() => setOpen(true), [setOpen])
  const closeSidebar = useCallback(() => setOpen(false), [setOpen])

  return (
    <Wrapper>
      <Helmet>
        <title>{title ? `${title} | Blocks Directory` : 'Blocks Directory'}</title>
      </Helmet>
      <ElevationScroll elevation={0}>
        <StyledAppBar
          position={fullPageContent && !isMobile ? 'absolute' : 'fixed'}
          transparent={fullPageContent}
          isMobile={isMobile}
        >
          <Container>
            <StyledToolbar>
              {!isMobile && (
                <>
                  <LogoButton to="/">
                    <Logo />
                  </LogoButton>
                  <Flex />
                  <HeaderList>
                    <HeaderButton to="/projects">
                      Browse
                    </HeaderButton>
                    <Divider />
                    <HeaderButton to="/submit-project">
                      Submit Project
                    </HeaderButton>
                    <Divider />
                    <HeaderButton to="/blog">
                      Blog
                    </HeaderButton>
                    <Divider />
                    <HeaderButton to="/about">
                      About
                    </HeaderButton>
                    <Divider />
                  </HeaderList>
                </>
              )}
              {isMobile && (
                <MenuButton onClick={openSidebar}>
                  <MenuIcon />
                </MenuButton>
              )}
            </StyledToolbar>
          </Container>
        </StyledAppBar>
      </ElevationScroll>
      <Drawer open={isMobile && isOpen} onClose={closeSidebar}>
        <LogoButton to="/">
          <Logo />
        </LogoButton>
        <Box pb={2} />
        <HeaderButton to="/projects">
          Browse
        </HeaderButton>
        <Divider />
        <HeaderButton to="/submit-project">
          Submit Project
        </HeaderButton>
        <Divider />
        <HeaderButton to="/">
          Blog
        </HeaderButton>
        <Divider />
        <HeaderButton to="/about">
          About
        </HeaderButton>
        <Divider />
      </Drawer>
      <Content>
        <Container>
          <Toolbar />
          {!fullPageContent && children}
        </Container>
        {fullPageContent && children}
      </Content>
    </Wrapper>
  )
})
