import { ProfileModel } from "../models/profileModel";
import { Request, Response, NextFunction } from "express";

interface ProfileRequest extends Request {
  profile?: {
    profile_id?: number;
    user_id: string;
    address?: string;
    phone?: number;
    social_media?: string;
  };
  user?: {
    user_id: string;
    username?: string;
    email?: string;
    role?: string;
  };
}


class ProfileController {
  static async getAll(
  req: Request,
  res: Response,
  next: NextFunction
  ): Promise<void> {
  try {
      const profiles = await ProfileModel.findAll();
      if (!profiles) {
      return next(new Error("Profiles not found"));
      }
      res.status(200).json(profiles);
  } catch (error) {
      next(error);
  }
  }
  static async getByUserId(
  req: ProfileRequest,
  res: Response,
  next: NextFunction
  ): Promise<void> {
  try {
      const { userId } = req.params;
      const profile = await ProfileModel.findOne({
      where: { user_id: userId },
      });
      if (profile) {
      res.status(200).json({ exists: true, profile });
      } else {
      res.status(404).json({ exists: false });
      }
  } catch (error) {
      next(error);
  }
  }
  static async getByProfileId(
  req: ProfileRequest,
  res: Response,
  next: NextFunction
  ): Promise<void> {
  try {
      const { profile_id } = req.params;
      const profile = await ProfileModel.findOne({
      where: { profile_id },
      });

      if (!profile) {
      res.status(404).json({ message: "Profile not found" });
      return;
      }
      res.json(profile);
  } catch (error) {
      console.error("Error fetching profile:", error);
      res.status(500).json({ message: "Internal server error" });
  }
  }
  static async createProfile(
      req: ProfileRequest,
      res: Response,
      next: NextFunction
    ): Promise<void> {
      try {
        const user_id = req.user?.user_id;
        if (!user_id) {
          res.status(400).json({ message: "User ID is required" });
          return;
        }
        const { address, phone, social_media } = req.body;
        const profile = await ProfileModel.create({
          user_id,
          address,
          phone,
          social_media,
        });
        res.status(201).json({ message: "Profile created succesfull", profile });
      } catch (error) {
        next(error);
      }
  }
  static async updateProfile(
      req: Request,
      res: Response,
      next: NextFunction
  ): Promise<void> {
      try {
          const { profile_id } = req.params;
          const { address, phone, social_media } = req.body;
          const [updated] = await ProfileModel.update(
          { address, phone, social_media },
          { where: { profile_id } }
      );
          if (updated) {
              res.status(200).json({ message: "Profile updated successfully" });
          } else {
              res.status(404).json({ message: "Profile not found" });
          }
      } catch (error) {
          next(error);
      }
  }
}

export default ProfileController;
