import { ProductDocument } from "./../model/Product";
import Product from "../model/Product";

const createProduct = async (
  product: ProductDocument
): Promise<ProductDocument> => {
  return product.save();
};

const getAllProducts = async (): Promise<ProductDocument[]> => {
  return Product.find().sort({ name: 1 });
};

const getProductById = async (
  productId: string
): Promise<ProductDocument | null> => {
  const foundProduct = Product.findById(productId);
  return foundProduct;
};

export default {
  createProduct,
  getAllProducts,
  getProductById,
};
