import { DataTypes } from 'sequelize';
import { sequelize } from '../data/conecta.js';


export const Mae = sequelize.define('mae', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  idereco: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  fone: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  dataNasc: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, )