import { gql } from '@apollo/client'

export const projectsList = gql`
  query findProjects ($query: String!) {
    findProjects (query: $query) {
      id
      name
      description
      platform
      runtime
      provider
      lastCommitDate
      repositoryUrl
    }
  }
`
