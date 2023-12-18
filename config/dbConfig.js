import { Sequelize, DataTypes } from "sequelize";
const dbConfig = process.env.dbConfig;
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  operatorAliases: false,
});

try {
  await sequelize.authenticate();
  console.log("connected to the database");
} catch (error) {
  console.error("error connecting: ", error);
}
