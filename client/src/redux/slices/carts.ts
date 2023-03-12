import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductOrder } from "../../types/type";

type InitialState = { cartProducts: ProductOrder[] };

const initialState: InitialState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<ProductOrder>) => {
      console.log(action.payload);
      console.log(state.cartProducts);
      const isIncluded = state.cartProducts.some((cartItem) => {
        console.log(cartItem);
        console.log(action.payload);
        return cartItem._id === action.payload._id;
      });
      if (!isIncluded) {
        state.cartProducts.push(action.payload);
      }
    },
    removeProductToCart: (state, action: PayloadAction<ProductOrder>) => {
      const result = state.cartProducts.filter(
        (item) => item._id !== action.payload._id
      );
      state.cartProducts = result;
    },
    increaseQuantity: (state, action: PayloadAction<ProductOrder>) => {
      const foundProductIndex = state.cartProducts.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );
      if (foundProductIndex !== -1) {
        state.cartProducts[foundProductIndex].quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<ProductOrder>) => {
      const foundProductIndex = state.cartProducts.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );
      if (foundProductIndex !== -1) {
        state.cartProducts[foundProductIndex].quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
