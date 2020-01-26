const env = process.env.REACT_APP_ENV || 'dev'

// eslint-disable-next-line max-len
const joinSlackLink = 'https://join.slack.com/t/blocksdirectory/shared_invite/enQtOTIyMDMxNjQ1NjIyLWU1MzE2NzI4NzhhNDEzMjYzMTg4NjViYjRiYTI2ODRhNjJhMDAwYjg4NGJmZmYyZWUyNDNmMTlkZDg2NjIzNTE'

const config: any = {
  dev: {
    apolloUri: 'https://dev-api.blocks.directory/graphql',
    joinSlackLink,
  },
  prod: {
    apolloUri: 'https://api.blocks.directory/graphql',
    joinSlackLink,
  },
}


export const envConfig = config[env]
