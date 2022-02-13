import { createSlice } from '@reduxjs/toolkit';
import { Translation } from '../../../models/translation';
import { RootState } from '../../store';
import { loadProjectTranslations } from './translation-actions';

export interface TranslationState {
  loading: boolean;
  translations: Translation[];
}

const initialState: TranslationState = {
  loading: false,
  translations: []
};

export const translationSlice = createSlice({
  name: 'translation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadProjectTranslations.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadProjectTranslations.fulfilled, (state, action) => {
      state.loading = false;
      state.translations = action.payload;
    });
    builder.addCase(loadProjectTranslations.rejected, (state) => {
      state.loading = false;
      state.translations = [];
    });
  }
});

export const translationSelector = (state: RootState) => state.translation;

export default translationSlice.reducer;
