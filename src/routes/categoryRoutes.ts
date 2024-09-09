import express from "express";
import CategoryController from "../controllers/categoryControllers";
const categoryRoutes = express.Router();

categoryRoutes.get("/", CategoryController.getAll);
categoryRoutes.get("/id/:id", CategoryController.getById);

categoryRoutes.post("/create", CategoryController.create);

categoryRoutes.patch("/:id", CategoryController.updatedCategory);

categoryRoutes.delete("/:id", CategoryController.deleteCategory);

export default categoryRoutes;
