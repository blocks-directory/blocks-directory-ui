import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

import { envConfig } from '../configs'

export const client = new ApolloClient({
  uri: envConfig.apolloUri,
  fetch,
})
