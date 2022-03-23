import { configureStore } from '@reduxjs/toolkit';
import signInUserReducer from './slices/auth/signInUserSlice';
import signUpClientReducer from './slices/auth/signUpClientSlice';

// export const rootStore = configureStore({
//   reducer: {}
// });

export const authStore = configureStore({
  reducer: {
    signInUser: signInUserReducer,
    signUpClient: signUpClientReducer
  }
});
