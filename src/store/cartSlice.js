import { createSlice } from "@reduxjs/toolkit";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const cartQuantityFromStorage = localStorage.getItem("cartQuantity")
  ? JSON.parse(localStorage.getItem("cartQuantity"))
  : 0;

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: cartItemsFromStorage,
    totalPrice: 0,
    cartQuantity: cartQuantityFromStorage,
  },
  reducers: {
    addItemToCart(state, action) {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      state.totalPrice += item.price;
      state.cartQuantity++;
      localStorage.setItem("cartQuantity", JSON.stringify(state.cartQuantity));
    },
    decrementQuantity(state, action) {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
      }
      state.cartQuantity--;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartQuantity", JSON.stringify(state.cartQuantity));
    },

    incrementQuantity: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        if (existingItem.quantity) {
          existingItem.quantity++;
        } else {
          existingItem.quantity = 1;
        }
      }
      state.cartQuantity++;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartQuantity", JSON.stringify(state.cartQuantity));
    },
    removeFromCart(state, action) {
      const itemId = action.payload.id;
      const item = state.cartItems.find((item) => item.id === itemId);
    
      if (item) {
        const itemQuantity = item.quantity;
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    
        if (itemQuantity >= state.cartQuantity) {
          state.cartQuantity = 0;
        } else {
          state.cartQuantity -= itemQuantity;
        }
    
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        localStorage.setItem("cartQuantity", JSON.stringify(state.cartQuantity));
      }
    }
    ,
    cartQuantity: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.cartQuantity = 0; // Set cartQuantity back to 0
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartQuantity", JSON.stringify(state.cartQuantity));
    },
  },
});

export const {
  addItemToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  cartQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
