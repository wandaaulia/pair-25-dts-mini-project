import { configureStore } from "@reduxjs/toolkit";
import configApi from "./reducer.js";
export default configureStore({
  reducer: {
    apis: configApi,
  },
});
