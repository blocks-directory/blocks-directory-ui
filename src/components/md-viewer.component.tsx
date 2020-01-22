import React from 'react'
import styled from 'styled-components'
import { useAsync } from 'react-use'
import ReactMarkdown from 'react-markdown'
import { CircularProgress } from '@material-ui/core'

type MdViewerProps = {
  url: string
}

const Wrapper = styled.div`
  margin: 10px 0;
  color: #000000;
  font-size: 16px;
  pre {
    white-space: pre-wrap;
    word-break: keep-all;
  }
`

export const MdViewer = ({ url }: MdViewerProps) => {
  const { loading, value, error } = useAsync(async () => {
    const response = await fetch(url)
    const result = await response.text()
    return result
  }, [url])


  if (loading) {
    return (
      <Wrapper>
        <CircularProgress />
      </Wrapper>
    )
  }

  if (error) {
    return <Wrapper>Can&apos;t load ReadMe</Wrapper>
  }

  return (
    <Wrapper>
      <ReactMarkdown source={value} />
    </Wrapper>
  )
}
