import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import UserInformation from "./components/user/UserInformation";
import ProductList from "./components/product/ProductList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/user" element={<UserInformation />} />
    </Routes>
  );
}

export default App;
