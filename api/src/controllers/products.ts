import { Request, Response } from "express";
import Product from "../model/Product";
import ProductService from "../services/product";

export const getProductList = async (request: Request, response: Response) => {
  try {
    const productList = await ProductService.getAllProducts();
    response.json(productList);
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (request: Request, response: Response) => {
  try {
    const newProduct = new Product({
      name: request.body.name,
      price: request.body.price,
    });
    const product = await ProductService.createProduct(newProduct);
    response.json(product);
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (request: Request, response: Response) => {
  try {
    const productById = await ProductService.getProductById(request.params.id);
    response.json(productById);
  } catch (error) {
    console.log(error);
  }
};
