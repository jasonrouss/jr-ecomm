import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";

const initialState = {
  products: products,
  filteredProducts: products,

  selectedProductId: [],
  showSaleItems: false,
  minPrice: 0, // Add this property to track the minimum price
  maxPrice: 128, // Add this property to track the maximum price
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectedProductId: (state, action) => {
      state.selectedProductId = action.payload;
     
    }, 
    toggleSale: (state, action) => {
      state.showSaleItems = action.payload;

      if (!state.showSaleItems) {
        state.filteredProducts = state.products.filter(
          (product) =>
            product.onSale === "yes" &&
            product.price >= state.minPrice &&
            product.price <= state.maxPrice
        );
      } else {
        state.filteredProducts = state.products.filter(
          (product) =>
            product.price >= state.minPrice && product.price <= state.maxPrice
        );
      }
    },

    filterProducts: (state, action) => {
      const { minPrice, maxPrice } = action.payload;
      state.minPrice = minPrice; // Update the minimum price in the state
      state.maxPrice = maxPrice; // Update the maximum price in the state
      state.filteredProducts = state.products.filter((product) => {
        return (
          product.price >= minPrice &&
          product.price <= maxPrice &&
          (state.showSaleItems || product.onSale === "yes")
        );
      });
    },
    getValue: (state, action) => {
      const { minPrice, maxPrice } = action.payload;
      state.minPrice = minPrice;
      state.maxPrice = maxPrice;
    },
  },
});

export const { selectedProductId, filterProducts, toggleSale, getValue } =
  productSlice.actions;

export default productSlice.reducer;
