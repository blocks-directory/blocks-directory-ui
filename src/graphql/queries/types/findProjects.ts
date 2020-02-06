/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: findProjects
// ====================================================

export interface findProjects_findProjects {
  __typename: "ProjectListData";
  id: string;
  name: string;
  description: string | null;
  platform: string;
  runtime: string | null;
  provider: string | null;
  lastCommitDate: string;
  repositoryUrl: string;
}

export interface findProjects {
  findProjects: findProjects_findProjects[];
}

export interface findProjectsVariables {
  query: string;
  offset?: number | null;
}
