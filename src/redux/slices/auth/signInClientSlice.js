import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInUser } from "../../../utils/api/services/auth/signIn";

const initialState = {};

export const signInClientAsync = createAsyncThunk('signInClient', async (client) => {
  return await signInUser(client);
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInClientAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signInClientAsync.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success) {
          state.user = action.payload;
          localStorage.setItem('token', action.payload.token.authToken);
          localStorage.setItem('refreshToken', action.payload.token.refreshToken);
          state.isLogged = true;
        }
      })
  }
});

export const { setIsLogged } = authSlice.actions;
export const loadingLogin = (state) => state.auth.loading;
export const isSuccess = (state) => state.auth.isLogged;

export default authSlice.reducer;
