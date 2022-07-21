import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");

const initialState = {
  host_img: process.env.REACT_APP_IMG,
  data: [],
  imgProfile: "",
};

const apis = createSlice({
  name: "apis",
  initialState,
  reducers: {
    GET_DATA: (state, action) => {
      state.data = [action.payload];
    },
    GET_PHOTO: (state, action) => {
      state.imgProfile = action.payload;
    },
  },
});

export const fetchApi = (data) => async (dispatch) => {
  try {
    const env = process.env.REACT_APP_ENV;
    const key = process.env.REACT_APP_KEY;
    const res = await axios.get(`${env}/${data.path}api_key=${key}`);
    dispatch(GET_DATA(res.data));
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const { GET_DATA, GET_PHOTO } = apis.actions;
export default apis.reducer;
