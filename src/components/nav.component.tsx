import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.nav`
  text-align: center;
  ul {
    display: flex;
    justify-content: space-between;
  }
  > ul {
    padding: 4px 16px;
  }
  li {
    display: flex;
    padding: 6px 8px;
  }
  a {
    color: #067df7;
    text-decoration: none;
    font-size: 13px;
  }
`

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map((link: any) => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <Wrapper>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </Wrapper>
)

export default Nav
