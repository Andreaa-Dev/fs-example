import { productActions } from "../slices/products";
import { AppDispatch } from "../store";

const url = "http://localhost:8000/products";

export function fetchProductData() {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const productData = await response.json();
    dispatch(productActions.getProductList(productData));
  };
}
