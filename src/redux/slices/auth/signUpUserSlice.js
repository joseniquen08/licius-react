import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signUpClient, signUpRestaurant } from "../../../utils/api/services/auth/signUp";

const initialState = {};

export const signUpClientAsync = createAsyncThunk('signUpClient', async (client) => {
  return await signUpClient(client);
});

export const signUpRestaurantAsync = createAsyncThunk('signUpRestaurant', async (restaurant) => {
  return await signUpRestaurant(restaurant);
});

export const signUpUserSlice = createSlice({
  name: 'signUpUser',
  initialState,
  reducers: {},
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
        } else {
          if (!action.payload.type) {}
          else {}
        }
      })
      .addCase(signUpRestaurantAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signUpRestaurantAsync.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success) {
          localStorage.setItem('token', action.payload.token.authToken);
          localStorage.setItem('refreshToken', action.payload.token.refreshToken);
        } else {
          if (!action.payload.type) {}
          else {}
        }
      })
  }
});

// export const {  } = signUpUserSlice.actions;
export const loadingSignUpUser= (state) => state.signUpUser.loading;

export default signUpUserSlice.reducer;
