import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  "restaurante_bcry", "root", "senacrs", {
  dialect: "mysql",
  host: "localhost",
  port: 3306
});