import { DataTypes } from 'sequelize';
import { sequelize } from '../data/conecta.js';


export const Medico = sequelize.define('medico', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  especialidade: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  celular: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  crm: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, )