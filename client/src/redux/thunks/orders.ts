import axios from "axios";
import { orderActions } from "../slices/orders";
import { AppDispatch } from "../store";

const url = "http://localhost:8000/orders";

export function fetchOrderList(userId: string) {
  return async (dispatch: AppDispatch) => {
    const userToken = localStorage.getItem("userToken");
    const response = await axios.get(`${url}/${userId}`, {
      headers: { Authorization: `Bearer ${userToken}` },
    });
    const orderData = response.data;
    dispatch(orderActions.getOrderList(orderData));
  };
}
