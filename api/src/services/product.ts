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

const deleteProductById = async (
  productId: string
): Promise<ProductDocument | null> => {
  const foundProduct = Product.findByIdAndDelete(productId);
  return foundProduct;
};

const updateProductInformation = async (
  productId: string,
  update: Partial<ProductDocument>
): Promise<ProductDocument | null> => {
  const foundProduct = Product.findByIdAndUpdate(productId, update, {
    new: true,
    //To make the changes to reflect in the console also, pass the third argument inside findByIdAndUpdate() function as an object and set
  });
  return foundProduct;
};

export default {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProductInformation,
};
