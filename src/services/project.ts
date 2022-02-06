import { handleRequest } from './utils';

export interface CreateProjectData {
  name: string;
}

export interface AddUserToProject {
  projectId: string;
  userId: string;
}

export interface DeleteUserFromProject {
  projectId: string;
  userId: string;
}

export const createProjectCall = async (projectData: CreateProjectData) => {
  const response = await fetch(`/project/create`, {
    method: 'POST',
    body: JSON.stringify(projectData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return handleRequest(response);
};

export const loadAllUserProjectsCall = async () => {
  const response = await fetch(`/project/all`, {
    method: 'GET'
  });
  return handleRequest(response);
};

export const addUserToProjectCall = async (
  userProjectData: AddUserToProject
) => {
  const response = await fetch(`/project/${userProjectData.projectId}`, {
    method: 'PUT',
    body: JSON.stringify({ userId: userProjectData.userId }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return handleRequest(response);
};

export const deleteProjectByIdCall = async (projectId: string) => {
  const response = await fetch(`/project/${projectId}`, {
    method: 'DELETE'
  });
  return handleRequest(response);
};

export const deleteUserFromProjectCall = async (
  deleteUserProject: DeleteUserFromProject
) => {
  const response = await fetch(
    `/project/${deleteUserProject.projectId}/user/${deleteUserProject.userId}`,
    {
      method: 'DELETE'
    }
  );
  return handleRequest(response);
};
