import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setTitleNewPostAction: (state, action) => {
      state.titleNewPost = action.payload;
    },
    setContentNewPostAction: (state, action) => {
      state.contentNewPost = action.payload;
    }
  }
});

export const { setTitleNewPostAction, setContentNewPostAction } = postSlice.actions;
export const titleNP = (state) => state.post.titleNewPost;
export const contentNP = (state) => state.post.contentNewPost;

export default postSlice.reducer;