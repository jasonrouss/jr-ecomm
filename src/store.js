import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./store/productSlice";
import cartReducer from "./store/cartSlice";
import searchReducer from "./store/searchSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    search: searchReducer,
  },
});

export default store;
