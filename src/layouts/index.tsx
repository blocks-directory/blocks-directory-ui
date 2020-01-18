import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'

import { client } from '../graphql/apollo.utils'
import { ThemeProvider } from '../contexts'

export default ({ children }: any) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <ApolloProvider client={client}>
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </ApolloProvider>
)
