import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { rhythm, scale } from '../../utils/typography'
import { ExternalLink } from './link'
import FullLogo from '../../svg/full-logo-dark.svg'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(20)};
  min-height: 100vh;
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`
const Logo = styled.div`
  background: url('${FullLogo}') no-repeat center center;
  background-size: contain;
  height: 50px;
  max-width: 320px;
  width: 100%;
`
const Header = styled.h1`
  margin-bottom: ${rhythm(1)};
  margin-top: 0;
  font-size: ${scale(1.5).fontSize};
  line-height: ${scale(1.5).lineHeight};
`

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const header = (
    <Header>
      <Link to="/blog">
        <Logo />
      </Link>
    </Header>
  )

  return (
    <Wrapper>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        {new Date().getFullYear()}, <ExternalLink href="https://blocks.directory">blocks.directory</ExternalLink>
      </footer>
    </Wrapper>
  )
}
