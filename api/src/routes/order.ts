import Router from "express";
import { createOrder, getOrderByUserIdController } from "../controllers/order";

const router = Router();
router.post("/:userId", createOrder);
router.get("/:id", getOrderByUserIdController);

export default router;
