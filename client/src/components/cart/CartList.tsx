import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import CartItem from "./CartItem";

export default function CartList() {
  const cart = useSelector((state: RootState) => state.carts.cartProducts);
  const userInformation = useSelector(
    (state: RootState) => state.users.userInformation
  );
  function onSubmitHandler() {
    const userToken = localStorage.getItem("userToken");
    axios
      .post(
        `http://localhost:8000/orders/${userInformation._id}`,
        { productList: cart },
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      )
      .then((response) => {
        console.log(response, "response");
      });
  }
  return (
    <div>
      CartList
      {cart.map((item) => (
        <CartItem item={item} />
      ))}
      <button onClick={onSubmitHandler}> Buy</button>
    </div>
  );
}
