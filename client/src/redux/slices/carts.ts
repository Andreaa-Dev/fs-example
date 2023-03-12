import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "./../../types/type";

type InitialState = { cartList: Cart[] };

const initialState: InitialState = {
  cartList: [
    {
      productList: [{ id: "", name: "", price: 0, quantity: 1 }],
    },
  ],
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const isIncluded = state.cartList.some(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (!isIncluded) {
        state.cartList.push(action.payload);
      }
    },
    // removeProductToCart: (state, action: PayloadAction<ProductCart>) => {
    //   const result = state.cartList.filter(
    //     (item) => item.id !== action.payload.id
    //   );
    //   state.cartList = result;
    // },
    increaseQuantity: (state, action: PayloadAction<ProductCart>) => {
      const foundProductIndex = state.cartList.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (foundProductIndex !== -1) {
        state.cartList[foundProductIndex].quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<ProductCart>) => {
      const foundProductIndex = state.cartList.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (foundProductIndex !== -1) {
        state.cartList[foundProductIndex].quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
