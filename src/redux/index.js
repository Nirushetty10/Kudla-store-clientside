import { configureStore  } from "@reduxjs/toolkit";
// import {thunk} from "redux-thunk";
import authSlice from './auth';

const store = configureStore({
   reducer : {
      auth : authSlice
   },
//    middleware : [thunk, ...getDefaultMiddleware()]
})

export default store