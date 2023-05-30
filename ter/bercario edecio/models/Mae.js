import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';

export const Mae = sequelize.define('mae', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  endereco: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  fone: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  datanasc: {
    type: DataTypes.DATE,
    allowNull: false
  }
});