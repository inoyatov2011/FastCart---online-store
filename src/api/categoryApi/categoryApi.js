import { createAsyncThunk } from "@reduxjs/toolkit";
let API = "https://store-api.softclub.tj"

export const getCategory = createAsyncThunk(
  "category/getCategory",
  async () => {
    try {
      let response = await fetch(`${API}/Category/get-categories`);
      let result = await response.json()
      return result.data;
    } catch (error) {
      console.log(error);
    }
  },
);  

