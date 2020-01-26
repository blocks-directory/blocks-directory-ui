import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ApolloProvider } from '@apollo/react-hooks'

import { getClient } from '../graphql/apollo.utils'
import { ThemeProvider } from '../contexts'
import { InitialLoadProvider } from '../contexts/initial-load.context'
import { UseImageProvider } from '../contexts/use-image.context'

const envQuery = graphql`{
  site {
    siteMetadata {
      env
    }
  }
}`


export default ({ children }: any) => {
  const data = useStaticQuery(envQuery)
  return (
    <ApolloProvider client={getClient(data.site.siteMetadata.env)}>
      <InitialLoadProvider>
        <ThemeProvider>
          <UseImageProvider>
            {children}
          </UseImageProvider>
        </ThemeProvider>
      </InitialLoadProvider>
    </ApolloProvider>
  )
}
