import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInUser } from "../../../utils/api/services/auth/signIn";

const initialState = {};

export const signInUserAsync = createAsyncThunk('signInUser', async (user) => {
  return await signInUser(user);
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
    },
    setMinLengthPassword: (state, action) => {
      state.minLengthPassword = action.payload;
    },
    setInvalidEmail: (state, action) => {
      state.invalidEmail = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUserAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signInUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success) {
          state.user = action.payload;
          localStorage.setItem('token', action.payload.token.authToken);
          localStorage.setItem('refreshToken', action.payload.token.refreshToken);
          state.isLogged = true;
        } else {
          if (!action.payload.type) {
            if (action.payload.message === 'password is incorrect') {
              state.passwordIncorrect = true;
            } else if (action.payload.message === 'email not found') {
              state.emailNotFound = true;
            }
          } else {
            if (action.payload.message === 'ValidationError: Min length is 8') {
              state.minLengthPassword = true;
            } else if (action.payload.message === 'ValidationError: Invalid email.') {
              state.invalidEmail = true;
            }
          }
        }
      })
  }
});

export const { setIsLogged, setPasswordIsIncorrect, setEmailNotFound, setMinLengthPassword, setInvalidEmail } = authSlice.actions;
export const loadingLogin = (state) => state.auth.loading;
export const isSuccess = (state) => state.auth.isLogged;
export const passwordIsIncorrect = (state) => state.auth.passwordIncorrect;
export const emailNotFound = (state) => state.auth.emailNotFound;
export const minLenPassword = (state) => state.auth.minLengthPassword;
export const invalidEmail = (state) => state.auth.invalidEmail;

export default authSlice.reducer;
