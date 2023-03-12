import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/carts";
import orderReducer from "./slices/orders";
import productReducer from "./slices/products";
import userReducer from "./slices/users";

const store = configureStore({
  reducer: {
    products: productReducer,
    users: userReducer,
    carts: cartReducer,
    orders: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
