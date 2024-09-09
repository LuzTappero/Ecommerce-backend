import { Sequelize, DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/sqlConfig";
import { OrderItemModel } from "./orderItemModel";

interface ProductAttributes {
  product_id: number;
  name: string;
  description: string;
  price: number;
  imagePath?: string;
  category_id?: number;
  created_at: Date;
  updated_at: Date;
}

interface ProductCreationAttributes
  extends Optional<
    ProductAttributes,
    "product_id" | "created_at" | "updated_at"
  > {}

export class ProductModel
  extends Model<ProductAttributes, ProductCreationAttributes>
  implements ProductAttributes
{
  public product_id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public imagePath?: string;
  public category_id?: number;
  public created_at!: Date;
  public updated_at!: Date;
}

ProductModel.init(
  {
    product_id: {
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
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    imagePath: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "categories",
        key: "category_id",
      },
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ProductModel",
    tableName: "products",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);


