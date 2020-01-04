import React, {FunctionComponent, PropsWithChildren, SFC} from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import './layout.css'
import { rhythm, scale } from '../../utils/typography'
import { ExternalLink } from './link'
import FullLogo from '../../svg/full-logo-dark.svg'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(26)};
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

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const header = (
    <h1
      style={{
        ...scale(1.5),
        marginBottom: rhythm(1),
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: 'none',
          textDecoration: 'none',
          color: 'inherit',
        }}
        to="/blog"
      >
        <Logo />
      </Link>
    </h1>
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
