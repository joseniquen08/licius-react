import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createPreference } from "../../../../utils/api/services/posts/checkout";

const initialState = {};

export const createPreferenceAsync = createAsyncThunk("createPreference", async (preference) => {
  return await createPreference(preference);
});

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setContentPostAction: (state, action) => {
      state.contentPost = action.payload;
    },
    setTotalDaysAction: (state, action) => {
      state.totalDays = action.payload;
    },
    setFinalDateAction: (state, action) => {
      state.finalDate = action.payload;
    },
    setTotalPriceAction: (state, action) => {
      state.totalPrice = action.payload;
    },
    setFinalTimeAction: (state, action) => {
      state.finalTime = action.payload;
    },
    setResponsePaymentSuccessAction: (state, action) => {
      state.status_payment = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPreferenceAsync.fulfilled, (state, action) => {
        state.preference_id = action.payload;
      })
  }
});

export const { setContentPostAction, setTotalDaysAction, setFinalDateAction, setTotalPriceAction, setFinalTimeAction, setResponsePaymentSuccessAction } = checkoutSlice.actions;
export const contentP = (state) => state.checkout.contentPost;
export const totalD = (state) => state.checkout.totalDays;
export const finalD = (state) => state.checkout.finalDate;
export const totalP = (state) => state.checkout.totalPrice;
export const finalT = (state) => state.checkout.finalTime;
export const preferenceId = (state) => state.checkout.preference_id;
export const statusPayment = (state) => state.checkout.status_payment;

export default checkoutSlice.reducer;
