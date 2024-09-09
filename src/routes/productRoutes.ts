import express from "express";
import ProductController from "../controllers/productControllers";
import validateProduct from "../middlewares/productValidator";
import upload from '../config/multerConfig'
import { verifyToken } from "../middlewares/verifyToken";
const productRoutes = express.Router();

productRoutes.get("/", ProductController.getAll);
productRoutes.get("/:id", ProductController.getById);

productRoutes.post("/create", verifyToken, upload.single('image'),validateProduct,ProductController.create);

productRoutes.patch("/:id",verifyToken, upload.single('image'),ProductController.update);

productRoutes.delete("/:id",verifyToken, ProductController.delete);


export default productRoutes;