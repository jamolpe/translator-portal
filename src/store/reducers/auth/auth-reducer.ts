import Cookies from 'js-cookie';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { loginUser } from './auth-actions';

export interface AuthState {
  loggin: boolean;
  logged: boolean;
  user?: string;
}

const authCookie = Cookies.get('accessToken');

const initialState: AuthState = {
  loggin: false,
  logged: !!authCookie,
  user: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.loggin = true;
      state.logged = false;
      state.user = '';
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loggin = false;
      state.logged = true;
      state.user = '';
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loggin = false;
      state.logged = false;
      state.user = '';
    });
  }
});

export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
