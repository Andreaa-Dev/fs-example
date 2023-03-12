// server
import Express from "express";
import cors from "cors";
import passport from "passport";

import productRouter from "./routes/products";
import orderRouter from "./routes/order";
import userRouter from "./routes/user";
import { jwtStrategy } from "./config/passport";

const app = Express();
app.use(Express.json());
app.use(cors());
app.use(passport.initialize());
passport.use(jwtStrategy);

// routes
app.use("/products", productRouter);
app.use("/orders", orderRouter);
app.use("/users", userRouter);

export default app;
