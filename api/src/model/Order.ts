import mongoose, { Document } from "mongoose";
import { ProductDocument, ProductSchema } from "./Product";

export type OrderDocument = Document & {
  date: Date;
  productList: ProductDocument[];
  userId: string;
};

const OrderSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  productList: [{ type: ProductSchema }],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model<OrderDocument>("Order", OrderSchema);
