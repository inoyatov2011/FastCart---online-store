import { createSlice } from "@reduxjs/toolkit";
import { getProductsInCart } from "../../api/cartApi/cartApi";

const initialState = {
    data:[],
    statusLogin:false
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsInCart.fulfilled, (state,action)=>{
        state.data = action.payload.data
    })
  },
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
