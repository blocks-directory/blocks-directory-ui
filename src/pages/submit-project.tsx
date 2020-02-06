import React, { useState } from 'react'
import styled from 'styled-components'
import { useMutation } from '@apollo/react-hooks'
import { Input, Typography } from '@material-ui/core'
import { navigate } from '@reach/router'

import { AppBarLayout } from '../components'
import { submitProject } from '../graphql/mutations'
import { Button } from '../components/button/button.component'

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
const StyledInput = styled(Input)`
  width: 350px;
`

export default () => {
  const [repositoryUrl, setRepositoryUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitProjectMutation] = useMutation(submitProject)

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
              directory please provide a repository link below.
            </Typography>
          </Section>
          <Section>
            <StyledInput
              value={repositoryUrl}
              onChange={(e) => setRepositoryUrl(e.target.value)}
              disableUnderline
              placeholder="Repository URL"
            />
          </Section>
          <Section>
            <Button
              disabled={loading || !repositoryUrl}
              updating={loading}
              onClick={async () => {
                setLoading(true)
                await submitProjectMutation({ variables: { repositoryUrl } })
                setLoading(false)
                navigate('/thank-you')
              }}
            >
              Submit
            </Button>
          </Section>
        </Content>
      </Wrapper>
    </AppBarLayout>
  )
}
