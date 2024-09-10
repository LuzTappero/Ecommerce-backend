import { Request, Response, NextFunction } from "express";
import bcrypt, { hash } from "bcrypt";
import { login } from "../utils/login";
import { signToken } from "../utils/signToken"
import { UserModel } from "../models/userModel";

interface UserRequest extends Request {
  user?: {
    user_id: string;
    username: string;
    password?: string;
    email?: string;
    role: 'admin' | 'client';
  };
}

class UserController {
  static async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const users = await UserModel.findAll();
      if (!users) {
        return next(new Error("User not found"));
      }
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
  static async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const user = await UserModel.findByPk(req.params.id);
      if (!user) {
        return next(new Error("User not found"));
      }
      res.status(200).json(user);
    } catch (error){
      next(error);
    }
  }
  static async registerUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { username, password, email, role } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      await UserModel.create({ username, password: hashedPassword, email, role });
      res.status(201).json({ message: "Registration successful" });
    } catch (error) {
      next(error);
    }
  }
  static async login(
    req: UserRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> {
  try {
    const { email, password } = req.body;
    const user = await login(email, password)
    const token= signToken(user)
    res.status(201).json({ message: "Login successful", token});
  } catch (error) {
    console.log(error)
    next(error);
  }
}
  static async logout(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      res.status(200).json({ message: "Logout successful" });
    } catch (error) {
      next(error);
    }
  }
  static async deleteUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const user_id = req.params.id;
      const user = await UserModel.findByPk(user_id);
      if (!user) {
        throw new Error("User not found");
      }
      await user.destroy();
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
  static async updateUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const user_id = req.params.id;
      const { username, password, email } = req.body;
      const user = await UserModel.findByPk(user_id);
      if (!user) {
        throw new Error("User not found");
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      await UserModel.update(
        { username, password: hashedPassword, email },
        { where: { user_id } }
      );
      res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
