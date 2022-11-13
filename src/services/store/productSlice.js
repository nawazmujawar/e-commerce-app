import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUSES.IDLE;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
  },
});

export const fetchProducts = createAsyncThunk("product/fetch", async () => {
  const resp = await fetch("https://fakestoreapi.com/products");
  const data = await resp.json();
  return data;
});

export default productSlice.reducer;
