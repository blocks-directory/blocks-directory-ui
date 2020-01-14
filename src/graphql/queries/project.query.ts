import { gql } from 'apollo-boost'

export const getProjectById = gql`
  query getProjectById ($id: String!) {
    getProjectById (id: $id) {
      id
      name
      description
      platform
      runtime
      provider
      repositoryUrl
      openIssues
      pullRequests
      lastCommitDate
      readmeUrl
    }
  }
`
