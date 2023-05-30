import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  "bercario_noite", "root", "senacrs", {
  dialect: "mysql",
  host: "localhost",
  port: 3306
});