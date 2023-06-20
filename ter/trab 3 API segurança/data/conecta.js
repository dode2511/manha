import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  "trab3_api", "root", "senacrs", {
  dialect: "mysql",
  host: "localhost",
  port: 3306
});