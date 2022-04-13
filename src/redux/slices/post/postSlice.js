import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createPostWithouthPayment } from "../../../utils/api/services/posts/checkout";

const initialState = {};

export const createPostWithouthPaymentAsync = createAsyncThunk("createPostWithouthPayment", async (post) => {
  return await createPostWithouthPayment(post);
});

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setTitleNewPostAction: (state, action) => {
      state.titleNewPost = action.payload;
    },
    setContentNewPostAction: (state, action) => {
      state.contentNewPost = action.payload;
    },
    setCreatePostSuccessAction: (state, action) => {
      state.createPostSuccess = action.payload;
    },
    setPostSuccessAction: (state, action) => {
      state.statusCreatePost = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPostWithouthPaymentAsync.pending, (state, action) => {
        state.postIsLoading = true;
      })
      .addCase(createPostWithouthPaymentAsync.fulfilled, (state, action) => {
        state.postIsLoading = false;
        state.createPostSuccess = true;
        state.post_id = action.payload;
      })
  }
});

export const { setTitleNewPostAction, setContentNewPostAction, setCreatePostSuccessAction, setPostSuccessAction } = postSlice.actions;
export const loadingPost = (state) => state.post.postIsLoading;
export const titleNP = (state) => state.post.titleNewPost;
export const contentNP = (state) => state.post.contentNewPost;
export const createPS = (state) => state.post.createPostSuccess;
export const statusCP = (state) => state.post.statusCreatePost;

export default postSlice.reducer;