import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  env: process.env.REACT_APP_ENV,
  key: process.env.REACT_APP_KEY,
};
const apis = createSlice({
  name: "apis",
  initialState,
  reducers: {},
});
export default apis.reducer;
