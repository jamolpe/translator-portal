import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo, login, UserData } from '../../../services/auth';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (user: UserData, thunkAPI) => {
    try {
      await login(user);
      const userResponse = await getUserInfo();
      return userResponse.body;
    } catch (error) {
      throw error;
    }
  }
);
