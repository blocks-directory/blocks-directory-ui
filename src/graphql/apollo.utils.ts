import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

import { getEnvConfig } from '../configs'

export const getClient = (env: string) => new ApolloClient({
  uri: getEnvConfig(env).apolloUri,
  fetch,
})
