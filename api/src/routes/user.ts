import Router from "express";
import passport from "passport";

import {
  createUser,
  updateUserById,
  logInWithPassWord,
} from "../controllers/user";

const router = Router();

router.post("/", createUser);
router.post("/login", logInWithPassWord);
router.put(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  updateUserById
);

export default router;
