const env = process.env.REACT_APP_ENV || 'dev'

const config: any = {
  dev: {
    apolloUri: 'https://dev-api.blocks.directory/graphql',
  },
  prod: {
    apolloUri: 'https://dev-api.blocks.directory/graphql',
  },
}


export const envConfig = config[env]
