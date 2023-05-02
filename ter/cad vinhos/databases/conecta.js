import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'vinhedo', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});