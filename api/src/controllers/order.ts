import { Request, Response } from "express";
import Order from "../model/Order";
import OrderService from "../services/order";

export const createOrder = async (request: Request, response: Response) => {
  try {
    const newOrder = new Order({
      userId: request.params.userId,
      productList: request.body.productList,
    });
    const orderList = await OrderService.createOrder(newOrder);
    response.json(orderList);
  } catch (error) {
    console.log(error);
  }
};

export const getOrderByUserIdController = async (
  request: Request,
  response: Response
) => {
  try {
    const foundOrder = await OrderService.getOrderByUserId(request.params.id);
    response.json(foundOrder);
  } catch (error) {
    console.log(error);
  }
};
