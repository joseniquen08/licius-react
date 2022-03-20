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
    },
    setPasswordIsIncorrect: (state, action) => {
      state.passwordIncorrect = action.payload;
    },
    setEmailNotFound: (state, action) => {
      state.emailNotFound = action.payload;
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
        } else {
          if (action.payload.message === 'password is incorrect') {
            state.passwordIncorrect = true;
          } else if (action.payload.message === 'email not found') {
            state.emailNotFound = true;
          }
        }
      })
  }
});

export const { setIsLogged, setPasswordIsIncorrect, setEmailNotFound } = authSlice.actions;
export const loadingLogin = (state) => state.auth.loading;
export const isSuccess = (state) => state.auth.isLogged;
export const passwordIsIncorrect = (state) => state.auth.passwordIncorrect;
export const emailNotFound = (state) => state.auth.emailNotFound;

export default authSlice.reducer;
