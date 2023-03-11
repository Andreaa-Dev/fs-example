import Order, { OrderDocument } from "../model/Order";

const createOrder = async (order: OrderDocument): Promise<OrderDocument> => {
  return order.save();
};

const getAllOrders = async (): Promise<OrderDocument[]> => {
  return Order.find().sort({ name: 1 }).populate("userId");
  // return Order.find().sort({ name: 1 }).populate("productList");
  // use populate - ref

  // dont use populate
  // [{_id,productList, userId,date}]
  // Order.find().sort({ name: 1 })
  // userInformation: UserServices.findUserById(userId)

  // no populate => orderList with userId =>
  // orderList - 10 orders => find user by Id => 10 times
};

// user wants to see the orderList

// populate: yes or no
// Yes:
// return Order.find({ userId: userIdFromRequest }).populate("userId");
// No: you should not populate here
const getOrderByUserId = async (
  userIdFromRequest: string
): Promise<OrderDocument[]> => {
  return Order.find({ userId: userIdFromRequest }).populate("userId");
};
export default { createOrder, getAllOrders, getOrderByUserId };
