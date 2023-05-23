import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'revenda', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});