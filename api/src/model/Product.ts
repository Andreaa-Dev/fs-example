import mongoose, { Document, Model } from "mongoose";

export type ProductDocument = Document & {
  name: string;
  price: number;
  imageLink: string;
};

export const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
  },
  imageLink: {
    type: String,
  },
});

export default mongoose.model<ProductDocument>("Product", ProductSchema);
