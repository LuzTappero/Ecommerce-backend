import { Sequelize, DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/sqlConfig";


interface CategoryAttributtes {
    category_id: number,
    name: string
}

interface CategoryCreationAttributes extends Optional<CategoryAttributtes, 'category_id'> {}
export class CategoryModel extends Model<CategoryAttributtes, CategoryCreationAttributes>
implements CategoryAttributtes{
    public category_id!: number;
    public name!: string;
}

CategoryModel.init(
    {
    category_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
},{
    sequelize,
    tableName: 'categories',
    timestamps: false,
})