import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setContentPost: (state, action) => {
      state.contentPost = action.payload;
    }
  }
});

export const { setContentPost } = checkoutSlice.actions;
export const contentP = (state) => state.checkout.contentPost;

export default checkoutSlice.reducer;
