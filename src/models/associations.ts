import sequelize from "../config/sqlConfig";
import { CategoryModel } from "./categoryModel";
import { ProductModel } from "./productModel";
import { ProfileModel } from "./profileModel";
import { OrderModel } from "./orderModel";
import { OrderItemModel } from "./orderItemModel";
import { UserModel } from "./userModel";

CategoryModel.hasMany(ProductModel, { foreignKey: 'category_id' });
ProductModel.belongsTo(CategoryModel, { foreignKey: 'category_id' });

UserModel.hasOne(ProfileModel, { foreignKey: 'user_id', onDelete: 'CASCADE' });
ProfileModel.belongsTo(UserModel, { foreignKey: 'user_id' });

OrderModel.hasMany(OrderItemModel, { foreignKey: 'order_id' });
OrderItemModel.belongsTo(OrderModel, { foreignKey: 'order_id' });

UserModel.hasMany(OrderModel, { foreignKey: 'user_id' });
OrderModel.belongsTo(UserModel, { foreignKey: 'user_id' });

OrderItemModel.belongsTo(ProductModel, { foreignKey: 'product_id' });
ProductModel.hasMany(OrderItemModel, { foreignKey: 'product_id' });

export { CategoryModel, ProductModel, ProfileModel, UserModel, OrderItemModel, OrderModel };

sequelize.sync();