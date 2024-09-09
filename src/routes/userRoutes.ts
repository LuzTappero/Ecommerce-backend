import express from "express";
import UserController from "../controllers/userControllers";
import signInValidator from "../middlewares/signinValidator";
const userRoutes = express.Router();

userRoutes.get("/", UserController.getAll);
userRoutes.get("/id/:id", UserController.getById);

userRoutes.post("/register", signInValidator, UserController.registerUser);
userRoutes.post("/login", UserController.login);
userRoutes.post("/logout", UserController.logout);

userRoutes.delete("/:id", UserController.deleteUser);
userRoutes.patch("/:id", UserController.updateUser);

export default userRoutes;
