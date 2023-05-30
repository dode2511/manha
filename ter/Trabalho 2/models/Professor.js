import { DataTypes } from 'sequelize';
import { sequelize } from '../database/conecta.js';
import { Curso } from './Curso.js';


export const Professor = sequelize.define('professor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  fone: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  endereco: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
},{
    tableName: 'professores'
});
