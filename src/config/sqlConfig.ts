import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";


const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST as string,
    dialect: process.env.DB_DIALECT as "mysql",
    logging: false
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection to database ok");
    await sequelize.sync({ force: false });
    console.log("Database synchronized");
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
}
testConnection();
export default sequelize;
