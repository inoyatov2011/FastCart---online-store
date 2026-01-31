import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/url";
import { message } from "antd";


export const getProductsInCart = createAsyncThunk(
  "cart/getProductsInCart",
  async () => {
    try {
      let {data}= await axiosRequest.get(`/Cart/get-products-from-cart`);
      return data
    } catch (error) {
      console.log(error);
    }
  },
);  
export const deleteProductInCart = createAsyncThunk(
  "cart/deleteProductInCart",
  async (id,{dispatch}) => {
    try {
     await axiosRequest.delete(`/Cart/delete-product-from-cart?id=${id}`);
     message.success("Successfully deleted from cart")
     dispatch(getProductsInCart())
    } catch (error) {
      console.log(error);
    }
  },
);  
export const clearCart = createAsyncThunk(
  "cart/clearCart",
  async (_,{dispatch}) => {
    try {
     await axiosRequest.delete(`/Cart/clear-cart`);
     message.success("Successfully  cleared")
     dispatch(getProductsInCart())
    } catch (error) {
      console.log(error);
    }
  },
);
export const increanseProduct = createAsyncThunk(
  "cart/increanseProduct",
  async (id,{dispatch}) => {
    try {
     await axiosRequest.put(`/Cart/increase-product-in-cart?id=${id}`);
     message.success("Successfully increansed")
     dispatch(getProductsInCart())
    } catch (error) {
      console.log(error);
    }
  },
);
export const reduceProduct = createAsyncThunk(
  "cart/reduceProduct",
  async (id,{dispatch}) => {
    try {
     await axiosRequest.put(`/Cart/reduce-product-in-cart?id=${id}`);
     message.success("Successfully reduced")
     dispatch(getProductsInCart())
    } catch (error) {
      console.log(error);
    }
  },
);