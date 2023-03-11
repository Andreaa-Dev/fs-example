import mongoose, { Document } from "mongoose";

type ProductOrderDocument = Document & {
  name: string;
  price: number;
  quantity: number;
};

const ProductOrderSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
});

export type OrderDocument = Document & {
  date: Date;
  productList: ProductOrderDocument[];
  userId: string;
};

const OrderSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  productList: [ProductOrderSchema],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model<OrderDocument>("Order", OrderSchema);
