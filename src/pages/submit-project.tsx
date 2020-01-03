import React, { useState } from 'react'
import styled from 'styled-components'

import { Input, Typography } from '@material-ui/core'
import { AppBarLayout } from '../components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 64px);
  padding: 48px 24px;
  align-items: center;
  justify-content: flex-start;
`
const Content = styled.div`
 max-width: 900px;
 width: 100%;
`
const Section = styled.div`
  margin-bottom: 20px;
`
const StyledInput = styled(Input)`
  width: 350px;
`

export default () => {
  const [repoUrl, setRepoUrl] = useState('')

  return (
    <AppBarLayout title="Submit Project">
      <Wrapper>
        <Content>
          <Section>
            <Typography variant="h5">
              Submit Project
            </Typography>
          </Section>
          <Section>
            <Typography variant="body1">
              Share your project with the community
            </Typography>
          </Section>
          <Section>
            <Typography variant="body1">
              To submit your project to the
              directory please provide a GitHub link below
            </Typography>
          </Section>
          <Section>
            <StyledInput
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              disableUnderline
              placeholder="GitHub link"
            />
          </Section>
          <Section>
            <Typography variant="body1">
              Not a GitHub project? Click here
            </Typography>
          </Section>
        </Content>
      </Wrapper>
    </AppBarLayout>
  )
}
