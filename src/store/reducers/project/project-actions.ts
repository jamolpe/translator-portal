import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  CreateProjectData,
  createProjectCall,
  loadAllUserProjectsCall,
  addUserToProjectCall,
  AddUserToProject,
  deleteProjectByIdCall,
  deleteUserFromProjectCall,
  DeleteUserFromProject
} from '../../../services/project';
import { reportOk, reportKo } from '../status/status-actions';

export const createProjectAction = createAsyncThunk(
  'project/create',
  async (projectData: CreateProjectData, thunkAPI) => {
    try {
      const response = await createProjectCall(projectData);
      thunkAPI.dispatch(reportOk('Project Created'));
      return response.body;
    } catch (error) {
      thunkAPI.dispatch(reportKo('Error creating project'));
      throw error;
    }
  }
);

export const loadAllProjectAction = createAsyncThunk(
  'project/loadAll',
  async (_, thunkAPI) => {
    try {
      const response = await loadAllUserProjectsCall();
      thunkAPI.dispatch(reportOk('Projects loaded'));
      return response.body;
    } catch (error) {
      thunkAPI.dispatch(reportKo('Error loading projects'));
      throw error;
    }
  }
);

export const addUserToProjectAction = createAsyncThunk(
  'project/addUser',
  async (userToProject: AddUserToProject, thunkAPI) => {
    try {
      const response = await addUserToProjectCall(userToProject);
      thunkAPI.dispatch(reportOk('User added to project'));
      return response.body;
    } catch (error) {
      thunkAPI.dispatch(reportKo('Error adding user in project'));
      throw error;
    }
  }
);

export const deleteProject = createAsyncThunk(
  'project/delete',
  async (id: string, thunkAPI) => {
    try {
      const response = await deleteProjectByIdCall(id);
      thunkAPI.dispatch(reportOk('Project removed'));
      return response.code;
    } catch (error) {
      thunkAPI.dispatch(reportKo('Error removing project'));
      throw error;
    }
  }
);

export const deleteUserFromProject = createAsyncThunk(
  'project/deleteUser',
  async (deleteUserProject: DeleteUserFromProject, thunkAPI) => {
    try {
      const response = await deleteUserFromProjectCall(deleteUserProject);
      thunkAPI.dispatch(reportOk('User removed from project'));
      return response.code;
    } catch (error) {
      thunkAPI.dispatch(reportKo('Error removing user from project'));
      throw error;
    }
  }
);
