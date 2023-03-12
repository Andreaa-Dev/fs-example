import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/carts";

import { ProductOrder } from "../../types/type";

type Item = {
  item: ProductOrder;
};

export default function CartItem({ item }: Item) {
  const dispatch = useDispatch();
  function increaseQuantityHandler() {
    dispatch(cartActions.increaseQuantity(item));
  }

  function decreaseQuantityHandler() {
    dispatch(cartActions.decreaseQuantity(item));
  }

  return (
    <div>
      <p>name:{item.name}</p>
      <p>price:{item.price}</p>
      <button onClick={increaseQuantityHandler}>+</button>
      <p> quantity:{item.quantity}</p>
      <button onClick={decreaseQuantityHandler}>-</button>
    </div>
  );
}
