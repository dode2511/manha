import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  "agencia_turismo_manha", "root", "1234", {
  dialect: "mysql",
  host: "localhost",
  port: 3306
});