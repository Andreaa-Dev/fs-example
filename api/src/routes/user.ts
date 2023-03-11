import Router from "express";
import passport from "passport";

import {
  createUser,
  updateUserById,
  logInWithPassWord,
  googleAuthenticate,
} from "../controllers/user";

const router = Router();

router.post("/", createUser);
router.post("/login", logInWithPassWord);
router.put(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  updateUserById
);
// google log in
router.post(
  "/login-google",
  passport.authenticate("google-id-token", { session: false }),
  googleAuthenticate
);

export default router;
