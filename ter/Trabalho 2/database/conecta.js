import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  "Trabalho_2", "root", "senacrs", {
  dialect: "mysql",
  host: "localhost",
  port: 3306
});