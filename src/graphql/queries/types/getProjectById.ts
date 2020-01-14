/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getProjectById
// ====================================================

export interface getProjectById_getProjectById {
  __typename: "Project";
  id: string;
  name: string;
  description: string | null;
  platform: string;
  runtime: string | null;
  provider: string | null;
  repositoryUrl: string;
  openIssues: number | null;
  pullRequests: number | null;
  lastCommitDate: string;
  readmeUrl: string | null;
}

export interface getProjectById {
  getProjectById: getProjectById_getProjectById | null;
}

export interface getProjectByIdVariables {
  id: string;
}
