import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/url";
export const getUserById = createAsyncThunk(
  "accountSlice/getUserById",
  async (id) => {
    try {
      const { data } = await axiosRequest.get(
        `UserProfile/get-user-profile-by-id?id=${id}`,
      );
      return data.data;
    } catch (error) {
      console.error(error);
    }
  },
);

export const putUpdateUser = createAsyncThunk(
  "accountSlice/putUser",
  async (formData) => {
    try {
      const { data } = await axiosRequest.put(
        `UserProfile/update-user-profile`,
        formData,
      );
      return data.data;
    } catch (error) {
      console.error(error);
    }
  },
);
export const deleteUserProfile = createAsyncThunk(
  "accountSlice/deleteUserProfile",
  async (id) => {
    try {
      const { data } = await axiosRequest.delete(
        `UserProfile/delete-user?id=${id}`,
      );
      return data.data;
    } catch (error) {
      console.error(error);
    }
  },
);
