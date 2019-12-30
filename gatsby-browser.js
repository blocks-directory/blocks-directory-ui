import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'

import { client } from './src/graphql/apollo.utils'
import { ThemeProvider } from './src/contexts'

export const onServiceWorkerUpdateReady = () => {
  window.location.reload()
}

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <ApolloProvider client={client}>
    <ThemeProvider>
      {element}
    </ThemeProvider>
  </ApolloProvider>
)
