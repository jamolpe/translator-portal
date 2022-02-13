import { createAsyncThunk } from '@reduxjs/toolkit';

export const reportOk = createAsyncThunk(
  'status/ok',
  async (message: string, thunkAPI) => {
    return message;
  }
);
export const reportKo = createAsyncThunk(
  'status/ko',
  async (message: string, thunkAPI) => {
    return message;
  }
);
export const reportWarning = createAsyncThunk(
  'status/warning',
  async (message: string, thunkAPI) => {
    return message;
  }
);
