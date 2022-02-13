import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadProjectTranslation } from '../../../services/translation';
import { reportKo, reportOk } from '../status/status-actions';

export const loadProjectTranslations = createAsyncThunk(
  'translation/loadProject',
  async (projectId: string, thunkAPI) => {
    try {
      const response = await loadProjectTranslation(projectId);
      thunkAPI.dispatch(reportOk('Project translations loaded'));
      return response.body;
    } catch (error) {
      thunkAPI.dispatch(reportKo('Error loading project translations'));
      throw error;
    }
  }
);
