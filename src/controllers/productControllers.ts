import { Request, Response, NextFunction } from "express";
import { ProductModel } from "../models/productModel";
import cloudinary from "../config/cloudinaryConfig";
import streamifier from "streamifier";

class ProductController {
  static async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const products = await ProductModel.findAll();
      if (!products){
        throw new Error ('Product not found')
      }
      res.status(200).json({ message: "Get all products", products });
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
      const id = req.params.id
      const product = await ProductModel.findByPk(id);
      if (!product) {
        throw new Error ('Product not found')
      }
      res.status(200).json({ message: "Get products by Id ", product });
    } catch (error) {
      next(error);
    }
  }
  static async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { name, description, price, category_id } = req.body;
      let imagePath = '';
      if (req.file?.buffer) {
        try {
          const result = await new Promise<{ secure_url: string }>(
            (resolve, reject) => {
              const uploadStream = cloudinary.uploader.upload_stream(
                { folder: "products" },
                (error, result) => {
                  if (error) reject(error);
                  else if (result) resolve(result as { secure_url: string });
                }
              );
              streamifier.createReadStream(req.file!.buffer).pipe(uploadStream);
            }
          );
          imagePath = result.secure_url;
          console.log("Image uploaded to Cloudinary:", imagePath);
        } catch (uploadError) {
          console.error("Error uploading to Cloudinary:", uploadError);
          res.status(500).json({ error: "Error uploading image" });
          return;
        }
      } else {
        console.log("No file uploaded or file buffer is undefined.");
      }
      await ProductModel.create({
        name,
        description,
        price,
        imagePath,
        category_id,
      });
      res.status(201).json({ message: "Product created successfully" });
    } catch (error) {
      next(error);
    }
  }
  static async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const productId = parseInt(id, 10);
      const { name, description, price, category_id } = req.body;
      let imagePath = req.body.imagePath || '';
      if (req.file?.buffer) {
        try {
          const result = await new Promise<{ secure_url: string }>(
            (resolve, reject) => {
              const uploadStream = cloudinary.uploader.upload_stream(
                { folder: "products" },
                (error, result) => {
                  if (error) reject(error);
                  else if (result) resolve(result as { secure_url: string });
                }
              );
              streamifier.createReadStream(req.file!.buffer).pipe(uploadStream);
            }
          );
          imagePath = result.secure_url;
          console.log("Image uploaded to Cloudinary:", imagePath);
        } catch (uploadError) {
          console.error("Error uploading to Cloudinary:", uploadError);
          res.status(500).json({ error: "Error uploading image" });
          return;
        }
      } else {
        console.log("No new image uploaded, using existing imagePath.");
      }
      const [updated] = await ProductModel.update(
        { name, description, price, imagePath, category_id },
        {
          where: { product_id: productId },
        }
      );
      if (updated) {
        res.status(200).json({ message: "Product updated successfully" });
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    } catch (error) {
      next(error);
    }
  }
  static async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    const productId = parseInt(id, 10);
    try {
      const result = await ProductModel.destroy({ where: { product_id: productId } });
      if (result === 0) {
        res.status(404).json({ message: "Product not found" });
        return;
      }
      res.status(204).send();
    }catch (error: unknown) {
        if (error instanceof Error) {
            if (error.name === 'SequelizeForeignKeyConstraintError') {
              res.status(400).json({ message: "Cannot delete product because it is referenced in other records." })
            } else {
                res.status(500).json({ message: "Internal Server Error", error: error.message });
            }
        } else {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
  }
}

export default ProductController;