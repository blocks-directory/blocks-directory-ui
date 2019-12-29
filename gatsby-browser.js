import React from 'react'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'

import { ThemeProvider } from './src/contexts'
import { envConfig } from './src/configs'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: envConfig.apolloUri,
  }),
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
