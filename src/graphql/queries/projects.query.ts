import { gql } from 'apollo-boost'

export const projectsList = gql`
  query findProjects ($query: String!, $offset: Int) {
    findProjects (query: $query, offset: $offset) {
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
