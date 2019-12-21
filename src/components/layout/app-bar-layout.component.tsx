import React, { memo } from 'react'
import styled from 'styled-components'
import { AppBar, Toolbar, Container } from '@material-ui/core'
import Head from 'next/head'

import { ElevationScroll } from './elevation-scroll.component'
import { ButtonLink } from '../button-link.component'
import FullLogo from '../../svg/full-logo.svg'

interface AppBarProps {
  transparent?: boolean
  theme: any
}

const getAppBarBackground = (p: AppBarProps) => {
  if (p.transparent) {
    return 'background: rgba(65, 65, 65, 0.12)'
  }

  return `background: ${p.theme.palette.primary.main} url("/app_bar_bg.png") center 0 no-repeat`
}

const StyledAppBar = styled(({ transparent, ...props }) => <AppBar {...props} />)<AppBarProps>`
  ${getAppBarBackground};
  background-size: cover;
`
const StyledToolbar = styled(Toolbar)`
  align-items: stretch;
  padding: 0;
`
const HeaderButton = styled(ButtonLink)`
  color: white;
  padding: 0 16px;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
`
const LogoButton = styled(HeaderButton)`
  padding: 0 16px 0 0;
`
const Logo = styled(FullLogo)`
  height: 50px;
  width: 170px;
`
const Flex = styled.div`
  flex: 1;
`
const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
`
const HeaderList = styled.div`
  display: flex;
  flex-direction: row;
`
const Divider = styled.div`
  width: 2px;
  margin: 12px 0;
  background: rgba(255, 255, 255, 0.2);
`

interface ToolbarLayoutProps {
  children?: JSX.Element | JSX.Element []
  title?: string
  fullPageContent?: boolean
}

export const AppBarLayout = memo(({ children, title = '', fullPageContent }: ToolbarLayoutProps) => (
  <>
    <Head>
      <title>{title ? `${title} | Blocks Directory` : 'Blocks Directory'}</title>
    </Head>
    <ElevationScroll elevation={0}>
      <StyledAppBar
        position={fullPageContent ? 'absolute' : 'fixed'}
        transparent={fullPageContent}
      >
        <Container>
          <StyledToolbar>
            <LogoButton href="/">
              <Logo />
            </LogoButton>
            <Flex />
            <HeaderList>
              <HeaderButton href="/projects">
                Browse
              </HeaderButton>
              <Divider />
              <HeaderButton href="/add-project">
                Add Project
              </HeaderButton>
              <Divider />
              <HeaderButton href="/">
                Blog
              </HeaderButton>
              <Divider />
              <HeaderButton href="/about">
                About
              </HeaderButton>
              <Divider />
            </HeaderList>
          </StyledToolbar>
        </Container>
      </StyledAppBar>
    </ElevationScroll>
    <Content>
      <Container>
        <Toolbar />
        {!fullPageContent && children}
      </Container>
      {fullPageContent && children}
    </Content>
  </>
))
