import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { fetchProductData } from "../../redux/thunks/products";

export default function ProductList() {
  const productList = useSelector(
    (state: RootState) => state.products.productList
  );

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <div>
      ProductList
      {productList.map((item) => (
        <div>
          <p>name: {item.name}</p>
          <p> price: {item.price}</p>
          <button> Add to cart</button>
        </div>
      ))}
    </div>
  );
}
