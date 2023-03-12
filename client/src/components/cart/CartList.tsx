import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CartItem from "./CartItem";

export default function CartList() {
  const cart = useSelector((state: RootState) => state.carts.cartProducts);
  return (
    <div>
      CartList
      {cart.map((item) => (
        <CartItem item={item} />
      ))}
    </div>
  );
}
