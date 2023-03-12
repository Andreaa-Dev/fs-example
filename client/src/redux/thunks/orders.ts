import { orderActions } from "../slices/orders";
import { AppDispatch } from "../store";

const url = "http://localhost:8000/orders";

export function fetchOrderList(userId: string) {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(`${url}/${userId}`);
    // token
    const orderData = await response.json();
    dispatch(orderActions.getOrderList(orderData));
  };
}
