import React from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../../redux/slices/carts";
import { Product } from "../../types/type";

type Item = {
  item: Product;
};
export default function ProductItem({ item }: Item) {
  const dispatch = useDispatch();
  function addToCartHandler() {
    dispatch(cartActions.addProductToCart(item));
  }
  return (
    <div>
      <p>name: {item.name}</p>
      <p> price: {item.price}</p>
      <button onClick={addToCartHandler}> Add to cart</button>
    </div>
  );
}
