import { Sequelize, DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/sqlConfig";
import { UserModel } from "./userModel";
import { OrderItemModel } from "./orderItemModel";

interface OrderAttributes {
    order_id: number;
    user_id: string;
    delivery_option: string;
    total_price: number;
    created_at?: Date;
    updated_at?: Date;
}

interface OrderCreationAttributes extends Optional<OrderAttributes, "order_id"> {}

export class OrderModel extends Model<OrderAttributes, OrderCreationAttributes>
    implements OrderAttributes
    {
        public order_id!: number;
        public user_id!: string;
        public delivery_option!: string;
        public total_price!: number;
        public created_at?: Date;
        public updated_at?: Date;
    }


OrderModel.init(
{
    order_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
user_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
    model: UserModel,
    key: 'user_id'
    },
},
    delivery_option: {
        type: DataTypes.STRING(20),
        allowNull: false,
},
total_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
},
},
{
    sequelize,
    modelName: "OrderModel",
    tableName: "orders",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
});


