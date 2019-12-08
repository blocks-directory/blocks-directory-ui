import React, { memo } from 'react'
import styled from 'styled-components'
import { AppBar, Toolbar, Container } from '@material-ui/core'
import Head from 'next/head'

import { ElevationScroll } from './elevation-scroll.component'
import { ButtonLink } from '../button-link.component'
import FullLogo from '../../svg/full-logo.svg'

const StyledAppBar = styled(AppBar)`
  background: ${(p) => p.theme.palette.primary.main} url("/header.png") center 0 no-repeat;
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
const Logo = styled(FullLogo)`
  height: 50px;
  width: 140px;
`
const Flex = styled.div`
  flex: 1;
`
const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  children: JSX.Element | JSX.Element []
  title?: string
}

export const AppBarLayout = memo(({ children, title = '' }: ToolbarLayoutProps) => (
  <>
    <Head>
      <title>{title ? `${title} | Blocks Directory` : 'Blocks Directory'}</title>
    </Head>
    <ElevationScroll elevation={0}>
      <StyledAppBar position="fixed">
        <Container>
          <StyledToolbar>
            <HeaderButton href="/">
              <Logo />
            </HeaderButton>
            <Flex />
            <HeaderList>
              <Divider />
              <HeaderButton href="/add-project">
                Add Project
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
        {children}
      </Container>
    </Content>
  </>
))
