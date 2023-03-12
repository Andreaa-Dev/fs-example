import { createSlice } from "@reduxjs/toolkit";
import { Order } from "../../types/type";

type InitialState = { orderList: Order[] };

const initialState: InitialState = {
  orderList: [
    {
      createdAt: Date.now(),
      productList: [{ _id: "", name: "", price: 0, quantity: 1 }],
      userId: "",
    },
  ],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getOrderList: (state, action) => {
      state.orderList = action.payload;
    },
  },
});

export const orderActions = orderSlice.actions;
const orderReducer = orderSlice.reducer;
export default orderReducer;
