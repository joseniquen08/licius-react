import { configureStore } from '@reduxjs/toolkit';
import signInUserReducer from './slices/auth/signInUserSlice';
import signUpUserReducer from './slices/auth/signUpUserSlice';
import checkoutReducer from './slices/post/checkout/checkoutSlice';
import postReducer from './slices/post/postSlice';

// export const rootStore = configureStore({
//   reducer: {}
// });

export const authStore = configureStore({
  reducer: {
    signInUser: signInUserReducer,
    signUpUser: signUpUserReducer,
  }
});

export const postStore = configureStore({
  reducer: {
    post: postReducer,
  }
});

export const checkoutStore = configureStore({
  reducer: {
    checkout: checkoutReducer,
  }
});
