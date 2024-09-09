import { Sequelize, DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/sqlConfig";
import { OrderItem } from "sequelize";
import { OrderModel } from "./orderModel";
import { ProductModel } from "./productModel";

interface OrderItemAttributes {
    order_item_id: number;
    order_id: number;
    product_id: number;
    quantity: number;
    price: number;
    created_at?: Date;
    updated_at?: Date;
}

interface OrderCreationAttributes extends Optional<OrderItemAttributes, "order_item_id"> {}

export class OrderItemModel extends Model<OrderItemAttributes, OrderCreationAttributes>
    implements OrderItemAttributes
    {
        public order_item_id!: number;
        public order_id!: number;
        public product_id!: number;
        public quantity!: number;
        public price!: number;
        public created_at?: Date;
        public updated_at?: Date;
}

OrderItemModel.init(
{
    order_item_id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
    model: OrderModel,
    key: 'order_id'
    },
},
product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
        references: {
        model: ProductModel,
        key: 'product_id'
    },
},
quantity:{
    type: DataTypes.INTEGER,
    allowNull:false,
},
price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
}
},
{
    sequelize,
    modelName: "OrderItemModel",
    tableName: "order_item",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
});

