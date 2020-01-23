import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'

import { client } from '../graphql/apollo.utils'
import { ThemeProvider } from '../contexts'
import { InitialLoadProvider } from '../contexts/initial-load.context'
import { UseImageProvider } from '../contexts/use-image.context'

export default ({ children }: any) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <ApolloProvider client={client}>
    <InitialLoadProvider>
      <ThemeProvider>
        <UseImageProvider>
          {children}
        </UseImageProvider>
      </ThemeProvider>
    </InitialLoadProvider>
  </ApolloProvider>
)
