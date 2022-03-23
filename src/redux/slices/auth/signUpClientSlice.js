import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signUpClient } from "../../../utils/api/services/auth/signUp";

const initialState = {};

export const signUpClientAsync = createAsyncThunk('signUpClient', async (client) => {
  return await signUpClient(client);
});

export const signUpClientSlice = createSlice({
  name: 'signUpClient',
  initialState,
  reducers: {
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpClientAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signUpClientAsync.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success) {
          localStorage.setItem('token', action.payload.token.authToken);
          localStorage.setItem('refreshToken', action.payload.token.refreshToken);
          state.isLogged = true;
        } else {
          if (!action.payload.type) {}
          else {}
        }
      });
  }
});

export const { setIsLogged } = signUpClientSlice.actions;
export const loadingSignUpClient = (state) => state.signUpClient.loading;
export const isSuccess = (state) => state.signUpClient.isLogged;

export default signUpClientSlice.reducer;
