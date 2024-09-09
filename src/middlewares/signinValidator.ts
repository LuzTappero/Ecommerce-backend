import { body, validationResult } from "express-validator";
import { Express, Request, Response, NextFunction } from "express";
import { UserModel } from "../models/userModel";

const signInValidator = [
  body("username")
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long")
    .matches(/^[a-zA-Z0-9]+$/)
    .withMessage("Username must not contain special characters or spaces")
    .isLength({ max: 15})
    .withMessage("Username must be a maximum of 15 characters long")
    .custom(async (value) => {
      const existingUser = await UserModel.findOne({
        where: { username: value },
      });
      if (existingUser) {
        throw new Error("That username already exists");
      }
    }),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format")
    .isLength({ max: 35 })
    .withMessage("Email cannot be more than 35 characters")
    .custom(async (value) => {
      const existingEmail = await UserModel.findOne({
        where: { email: value },
      });
      if (existingEmail) {
        throw new Error("That email already exists");
      }
    }),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isString()
    .withMessage("Must have strings")
    .isLength({ min: 8 })
    .withMessage("The password must be at least 8 characters long")
    .matches(/[a-z]/)
    .withMessage("Password must contain at least one lowercase letter")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter")
    .matches(/\d/)
    .withMessage("Password must contain at least a number")
    .matches(/[a-zA-Z]/)
    .withMessage("Password must contain at least a letter")  .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Password must contain at least one special character"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export default signInValidator;
