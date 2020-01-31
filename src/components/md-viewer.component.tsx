import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useAsync } from 'react-use'
import ReactMarkdown from 'react-markdown'
import { CircularProgress } from '@material-ui/core'
import { replace, startsWith } from 'lodash-es'
import 'github-markdown-css/github-markdown.css'

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

type MdViewerProps = {
  url: string
  repositoryUrl: string
}

export const MdViewer = ({ url, repositoryUrl }: MdViewerProps) => {
  const { loading, value, error } = useAsync(async () => {
    const response = await fetch(url)
    const result = await response.text()
    return result
  }, [url])

  const transformUri = useCallback((imageUri: string) => {
    if (!startsWith(imageUri, 'http')) {
      const baseUrl = replace(url, 'README.md', '')
      return `${baseUrl}${imageUri}`
    }
    return imageUri
  }, [url])

  const transformLinkUri = useCallback((LinkUri: string) => {
    if (!startsWith(LinkUri, 'http')) {
      return `${repositoryUrl}/blob/master/${LinkUri}`
    }
    return LinkUri
  }, [repositoryUrl])

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
    <Wrapper className="markdown-body">
      <ReactMarkdown source={value} transformImageUri={transformUri} transformLinkUri={transformLinkUri} />
    </Wrapper>
  )
}
