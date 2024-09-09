import { Sequelize, UUIDV4, DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/sqlConfig";

interface UserAttributes {
  user_id: string;
  username: string;
  password: string;
  email: string;
  role: 'admin'  | 'client';
  created_at?: Date;
  updated_at?: Date;
}
interface UserCreationAttributes
  extends Optional<UserAttributes, "user_id" | "created_at" | "updated_at"| "role" > {}

  export class UserModel
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public user_id!: string;
  public username!: string;
  public password!: string;
  public email!: string;
  public role!: 'admin'  | 'client';
  public created_at?: Date;
  public updated_at?: Date;
}

UserModel.init(
  {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role:{
      type: DataTypes.ENUM('admin', 'client'),
      allowNull: false,
      defaultValue: 'client',
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "UserModel",
    tableName: "users",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

