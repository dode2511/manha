import { DataTypes } from 'sequelize';
import { sequelize } from '../database/conecta.js';
import { Professor } from './Professor.js';


export const Curso = sequelize.define('curso', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  endereco: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  turno: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  numeroAlunos:{
    type: DataTypes.INTEGER,
    allowNull: false
  }
});


Curso.belongsTo(Professor, {
    foreignKey: {
      name: 'professor_id',
      allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  })
  
  Professor.hasMany(Curso, {
    foreignKey: 'professor_id'
  })