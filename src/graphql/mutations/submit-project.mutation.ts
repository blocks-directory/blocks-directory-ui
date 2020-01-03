import { gql } from 'apollo-boost'

export const submitProject = gql`
  mutation submitProject ($repositoryUrl: String!) {
    submitProject(repositoryUrl: $repositoryUrl) {
      repositoryUrl
    }
  }
`
