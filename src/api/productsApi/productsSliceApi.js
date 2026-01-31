import { createAsyncThunk } from "@reduxjs/toolkit";
import {  axiosRequest } from "../../utils/url";
import { message } from "antd";
let API = "https://store-api.softclub.tj"
export const getProducts = createAsyncThunk(
  'todo/getProducts',
  async (filters = {}) => {
    try {
      const query = new URLSearchParams();

      if (filters.CategoryId)
        query.append("CategoryId", filters.CategoryId);

      if (filters.BrandId)
        query.append("BrandId", filters.BrandId);

      if (filters.MinPrice !== null && filters.MinPrice !== undefined)
        query.append("MinPrice", filters.MinPrice);

      if (filters.MaxPrice !== null && filters.MaxPrice !== undefined)
        query.append("MaxPrice", filters.MaxPrice);

      const response = await fetch(
        `${API}/Product/get-products?${query.toString()}`
      );

      const result = await response.json();
      return result.data.products;
    } catch (error) {
      console.error(error);
    }
  }
);


export const getByIdProduct = createAsyncThunk(
  "auth/getByIdProduct",
  async (id) => {
    try {
      let response = await fetch(`${API}/Product/get-product-by-id?id=${id}`);
      let result = await response.json()
      return result.data;
    } catch (error) {
      console.log(error);
    }
  },
); 
export const getBrand = createAsyncThunk(
  "auth/getBrand",
  async (id) => {
    try {
      let response = await fetch(`${API}/Brand/get-brands`);
      let result = await response.json()
      return result.data;
    } catch (error) {
      console.log(error);
    }
  },
); 
export const deleteProduct = createAsyncThunk(
  "category/deleteProduct",
  async (id, { dispatch }) => {
    try {
      await axiosRequest.delete(
        `/Product/delete-product?id=${id}`,
        
      );

      dispatch(getProducts());
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteImageProduct = createAsyncThunk(
  "category/deleteImageProduct",
  async (id, { dispatch }) => {
    try {
      await axiosRequest.delete(
        `/Product/delete-image-from-product?imageId=${id}`,
        
      );

      dispatch(getProducts());
    } catch (error) {
      console.log(error);
    }
  }
);
export const addToCart = createAsyncThunk(
  "product/addToCart",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      await axiosRequest.post(`Cart/add-product-to-cart?id=${id}`)
      message.success("Successfully added to cart")
      dispatch(getProducts())
    } catch (error) {
      message.warning("Product already exists in cart")
      return rejectWithValue(error.response?.data)
    }
  }
)
