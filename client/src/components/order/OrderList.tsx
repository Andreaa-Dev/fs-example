import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import { fetchOrderList } from "../../redux/thunks/orders";

export default function OrderList() {
  const userInformation = useSelector(
    (state: RootState) => state.users.userInformation
  );
  const userId = userInformation._id;

  const orderList = useSelector((state: RootState) => state.orders.orderList);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchOrderList(userId));
  }, [dispatch, userId]);

  console.log(orderList, "orderList");
  return <div>OrderList</div>;
}
