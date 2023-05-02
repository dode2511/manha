import { DataTypes } from 'sequelize';
import { sequelize } from '../data/conecta.js';
import { Carro } from './Carro.js';


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
  cpf: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  dataFab: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});


