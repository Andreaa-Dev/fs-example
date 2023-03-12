import Order, { OrderDocument } from "../model/Order";

const createOrder = async (order: OrderDocument): Promise<OrderDocument> => {
  return order.save();
};

const getOrderByUserId = async (
  userIdFromRequest: string
): Promise<OrderDocument[]> => {
  return Order.find({ userId: userIdFromRequest }).populate("userId");
};
export default { createOrder, getOrderByUserId };
