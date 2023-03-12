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

  console.log(productList, "productList");
  return <div>ProductList</div>;
}
