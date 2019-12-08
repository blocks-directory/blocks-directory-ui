/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: findProjects
// ====================================================

export interface findProjects_findProjects {
  __typename: "ProjectListData";
  id: string | null;
  name: string | null;
  description: string | null;
  platform: string | null;
  runtime: string | null;
  provider: string | null;
  lastCommitDate: string | null;
}

export interface findProjects {
  findProjects: findProjects_findProjects[];
}

export interface findProjectsVariables {
  query: string;
}
