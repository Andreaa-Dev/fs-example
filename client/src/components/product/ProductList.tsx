import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { fetchProductData } from "../../redux/thunks/products";
import ProductItem from "./ProductItem";

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
        <ProductItem key={item._id} item={item} />
      ))}
    </div>
  );
}
