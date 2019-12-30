import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'

import { client } from './src/graphql/apollo.utils'
import { ThemeProvider } from './src/contexts'


/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <ApolloProvider client={client}>
    <ThemeProvider>
      {element}
    </ThemeProvider>
  </ApolloProvider>
)
