import { createSlice } from "@reduxjs/toolkit";
import {  getCategory } from "../../api/categoryApi/categoryApi";

const initialState = {
    data2:[],
    user:{}
};

export const categotySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategory.fulfilled, (state, action) => {
        state.data2 = action.payload
    });
  },
});

export const {} = categotySlice.actions;

export default categotySlice.reducer;
