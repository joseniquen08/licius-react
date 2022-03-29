import { configureStore } from '@reduxjs/toolkit';
import signInUserReducer from './slices/auth/signInUserSlice';
import signUpUserReducer from './slices/auth/signUpUserSlice';

// export const rootStore = configureStore({
//   reducer: {}
// });

export const authStore = configureStore({
  reducer: {
    signInUser: signInUserReducer,
    signUpUser: signUpUserReducer
  }
});
