import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import UserInformation from "./components/user/UserInformation";
import ProductList from "./components/product/ProductList";
import UserLogInForm from "./components/user/UserLogInForm";
import UserRegisterForm from "./components/user/UserRegisterForm";
import CartList from "./components/cart/CartList";
import OrderList from "./components/order/OrderList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/register" element={<UserRegisterForm />} />
      <Route path="/login" element={<UserLogInForm />} />
      <Route path="/user" element={<UserInformation />} />
      <Route path="/cart" element={<CartList />} />
      <Route path="/order" element={<OrderList />} />
    </Routes>
  );
}

export default App;
