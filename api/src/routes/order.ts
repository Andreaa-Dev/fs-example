import Router from "express";
import passport from "passport";

import { createOrder, getOrderByUserIdController } from "../controllers/order";

const router = Router();
router.post(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  createOrder
);
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  getOrderByUserIdController
);

export default router;
