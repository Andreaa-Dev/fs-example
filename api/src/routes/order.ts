import Router from "express";
import {
  getOrderList,
  createOrder,
  getOrderByUserIdController,
} from "../controllers/order";

const router = Router();

router.get("/", getOrderList);
router.post("/:userId", createOrder);
router.get("/:id", getOrderByUserIdController);
// update order

export default router;
