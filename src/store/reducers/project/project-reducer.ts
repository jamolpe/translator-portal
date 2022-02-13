import { createSlice } from '@reduxjs/toolkit';
import { Project } from '../../../models/project';
import { RootState } from '../../store';
import {
  addUserToProjectAction,
  createProjectAction,
  deleteProject,
  deleteUserFromProject,
  loadAllProjectAction
} from './project-actions';

export interface ProjectState {
  loading: boolean;
  creating: boolean;
  addingUser: boolean;
  deletingProject: boolean;
  deletingUserProject: boolean;
  projects: Project[];
}

const initialState: ProjectState = {
  loading: false,
  creating: false,
  addingUser: false,
  deletingProject: false,
  deletingUserProject: false,
  projects: []
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProjectAction.pending, (state) => {
      state.creating = true;
    });
    builder.addCase(createProjectAction.fulfilled, (state) => {
      state.creating = false;
    });
    builder.addCase(createProjectAction.rejected, (state) => {
      state.creating = false;
    });
    builder.addCase(loadAllProjectAction.pending, (state) => {
      state.loading = true;
      state.projects = [];
    });
    builder.addCase(loadAllProjectAction.fulfilled, (state, action) => {
      state.loading = false;
      state.projects = action.payload;
    });
    builder.addCase(loadAllProjectAction.rejected, (state) => {
      state.loading = false;
      state.projects = [];
    });
    builder.addCase(addUserToProjectAction.pending, (state) => {
      state.addingUser = true;
      state.projects = [];
    });
    builder.addCase(addUserToProjectAction.fulfilled, (state, action) => {
      state.addingUser = false;
      state.projects = action.payload;
    });
    builder.addCase(addUserToProjectAction.rejected, (state) => {
      state.addingUser = false;
      state.projects = [];
    });
    builder.addCase(deleteProject.pending, (state) => {
      state.deletingProject = true;
    });
    builder.addCase(deleteProject.fulfilled, (state) => {
      state.deletingProject = false;
    });
    builder.addCase(deleteProject.rejected, (state) => {
      state.deletingProject = false;
    });
    builder.addCase(deleteUserFromProject.pending, (state) => {
      state.deletingUserProject = true;
    });
    builder.addCase(deleteUserFromProject.fulfilled, (state) => {
      state.deletingUserProject = false;
    });
    builder.addCase(deleteUserFromProject.rejected, (state) => {
      state.deletingUserProject = false;
    });
  }
});

export const projectSelector = (state: RootState) => state.project;

export default projectSlice.reducer;
