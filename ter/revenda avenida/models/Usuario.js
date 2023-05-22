import { DataTypes } from 'sequelize';
import { sequelize } from '../data/conecta.js';


export const Usuario = sequelize.define('usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  fone: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  encodereco: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
});


