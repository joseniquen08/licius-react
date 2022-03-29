import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setContentNewPost: (state, action) => {
      state.contentNewPost = action.payload;
    }
  }
});

export const { setContentNewPost } = postSlice.actions;
export const contentNP = (state) => state.post.contentNewPost;

export default postSlice.reducer;