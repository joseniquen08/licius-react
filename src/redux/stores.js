import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/signInClientSlice';

// export const rootStore = configureStore({
//   reducer: {}
// });

export const authStore = configureStore({
  reducer: {
    auth: authReducer
  }
});
