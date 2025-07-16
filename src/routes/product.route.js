//router
import { Router } from "express";
import productController from "../controllers/product.controller.js";

const router = Router();

router.get("/", productController.getProducts);
router.get('/:id', productController.getProductById); 
router.post("/", productController.AddProduct);
router.delete('/:id', productController.DeleteProduct); 

export default router;
