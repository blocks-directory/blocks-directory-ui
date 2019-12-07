import React from 'react'
import styled from 'styled-components'
import { NextPageContext } from 'next'

import { AppBarLayout } from '../components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 64px);
  padding: 0 20px;
  align-items: center;
  justify-content: center;
`
const Title = styled.div`
  font-size: 44px;
  font-weight: 300;
  text-align: center;
`
const Text = styled.p`
  text-align: center;
`

interface ErrorPageProps {
  statusCode: string
  text: string
}

const Error = ({ statusCode, text }: ErrorPageProps) => (
  <AppBarLayout title={statusCode || 'Error'}>
    <Wrapper>
      <Title>{statusCode}</Title>
      <Text>{text}</Text>
    </Wrapper>
  </AppBarLayout>
)

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode || err?.statusCode
  const text = statusCode === 404 ? 'Page not found 😿' : 'Something went wrong!'
  return { statusCode, text }
}

export default Error
