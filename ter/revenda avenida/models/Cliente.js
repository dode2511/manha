import { DataTypes } from 'sequelize';
import { sequelize } from '../data/conecta.js';


export const Cliente = sequelize.define('cliente', {
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
  endereco: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
});


