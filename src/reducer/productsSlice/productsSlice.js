import { createSlice } from "@reduxjs/toolkit";
import {  getBrand, getByIdProduct, getProducts } from "../../api/productsApi/productsSliceApi";

const initialState = {
    data:[],
    user:{},
    subCategory:[],
    brands:[],
    colors:[]
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload
    });
    builder.addCase(getByIdProduct.fulfilled, (state, action) => {
        state.user = action.payload
    })
     builder.addCase(getBrand.fulfilled, (state, action) => {
        state.brands = action.payload
    })
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
