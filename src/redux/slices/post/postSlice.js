import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setContentPost2: (state, action) => {
      state.contentPost2 = action.payload;
    }
  }
});

export const { setContentPost2 } = postSlice.actions;
export const contentP2 = (state) => state.post.contentPost2;

export default postSlice.reducer;