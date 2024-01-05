import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Add new item
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      ///remove item
      const indexToRemove = action.payload;
      state.items.splice(indexToRemove, 1);
    },
    clearCart: (state) => {
      //all items are clear
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
