import { createSlice } from "@reduxjs/toolkit";
import { Order } from "../../types/type";

type InitialState = { cartList: Order[] };

const initialState: InitialState = {
  cartList: [
    {
      createdAt: Date.now(),
      productList: [{ name: "", price: 0, quantity: 1 }],
      userId: "",
    },
  ],
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    getCartList: (state, action) => {
      state.cartList = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
