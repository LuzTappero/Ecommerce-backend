import { Request, Response, NextFunction } from "express";
import { CategoryModel } from "../models/categoryModel";

class CategoryController{
    static async getAll(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void>{
        try{
            const categories = await CategoryModel.findAll();
            if (!categories){
                throw new Error ('Categories not found')
            }
            res.status(200).json({ message: "Get all categories", categories });
        }catch(error){
            next(error)
        }
    }
    static async getById(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void>{
        try{
            const id = req.params.id
            const category_id = await CategoryModel.findByPk(id);
            if (!category_id){
                throw new Error ('Category not found')
            }
            res.status(200).json({ message: "Get category by id", category_id });
        }catch(error){
            next(error)
        }
    }
    static async create(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void>{
        try{
            const { name } = req.body;
            const category = await CategoryModel.create({ name });
            res.status(201).json({message: 'Category saved succesfully', category});
    }catch (error) {
        next(error)
    }
    };
    static async updatedCategory(req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void>{
        try{
            const {id} = req.params
            const {name} = req.params
            const updated = await CategoryModel.update({name}, {where: {category_id:id }})
            if (updated){
                await CategoryModel.findByPk(id)
                res.status(200).json({message: 'Category updated successfully'});
            }else {
                res.status(404).json({ message: 'Category not found' });
            }
        }catch(error){
            next(error)
        }
    }
    static async deleteCategory(req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void>{
        try{
            const id = req.params.id
            const deleted = await CategoryModel.destroy( {where: {category_id:id }})
            if (deleted){
                res.status(200).json({message: 'Category deleted successfully'});
            }else {
                res.status(404).json({ message: 'Category not found' });
            }
        }catch(error){
            next(error)
        }
    }
}


export default CategoryController