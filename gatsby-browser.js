import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import { ThemeProvider } from './src/contexts'
import { envConfig } from './src/configs'

const client = new ApolloClient({
  uri: envConfig.apolloUri,
})

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
