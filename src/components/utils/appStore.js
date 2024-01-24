import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSliceReducer, //cart is accessig the "items array" inside the CreateSlice
  },
});

export default appStore;
