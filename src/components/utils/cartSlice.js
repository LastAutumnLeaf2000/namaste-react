import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      //mutating the state
      state.items.push(action.payload); //action = {payload:"pizza"}
    },
    removeItem: (state, action) => {
      // state.items = state.items.filter((val) => val.item.id!== action.payload.item.id);
      state.items.splice(action.payload, 1)//both work... only action.payload data is changed inside Cart component
    },
    emptyCart: (state) => {
      state.items.length = 0;
      //return {items:[]} //both work
    },
  },
});

export const { addItems, removeItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
