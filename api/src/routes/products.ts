import Router from "express";

import {
  getProductList,
  createProduct,
  getProductById,
} from "../controllers/products";

const router = Router();

router.get("/", getProductList);
router.post("/", createProduct);
router.get("/:id", getProductById);

export default router;
