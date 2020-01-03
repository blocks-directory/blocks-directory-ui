import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

import { AppBarLayout } from '../components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 64px);
  padding: 48px 0;
  align-items: center;
  justify-content: flex-start;
`
const Content = styled.div`
 max-width: 1328px;
 width: 100%;
`
const Section = styled.div`
  margin-bottom: 20px;
`

export default () => (
  <AppBarLayout title="Thank You">
    <Wrapper>
      <Content>
        <Section>
          <Typography variant="h5">
            Thank You!
          </Typography>
        </Section>
        <Section>
          <Typography variant="body1">
            We will review the service you submitted and add it to the directory shortly.
            Keep up the good work!
          </Typography>
        </Section>
        <Section>
          <Typography variant="body1">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">Join our Slack community</a> to discuss microservices, get latest news and more.
          </Typography>
        </Section>
      </Content>
    </Wrapper>
  </AppBarLayout>
)
