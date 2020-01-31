import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useAsync } from 'react-use'
import ReactMarkdown from 'react-markdown'
import { CircularProgress } from '@material-ui/core'
import { replace, startsWith } from 'lodash-es'

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
  
  img {
    max-width: 100%;
  }
`

export const MdViewer = ({ url }: MdViewerProps) => {
  const { loading, value, error } = useAsync(async () => {
    const response = await fetch(url)
    const result = await response.text()
    return result
  }, [url])

  const transformImageUri = useCallback((imageUri: string) => {
    if (!startsWith(imageUri, 'http')) {
      const baseUrl = replace(url, 'README.md', '')
      return `${baseUrl}${imageUri}`
    }
    return imageUri
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
      <ReactMarkdown source={value} transformImageUri={transformImageUri} />
    </Wrapper>
  )
}
