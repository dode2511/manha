import { DataTypes } from 'sequelize';
import { sequelize } from '../database/conecta.js';
import { Restaurante } from './restaurante.js';
export const Avaliacao = sequelize.define('avalicao', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  total: {
    type: DataTypes.INTEGER,
    defaultValue: 0
   // allowNull: false
  },
  num: {
    type: DataTypes.INTEGER(5),
    defaultValue: 0
    //allowNull: false
  }
});

Avaliacao.belongsTo(Restaurante, {
    foreignKey: {
      name: 'restaurante_id',
      allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  })
  
  Restaurante.hasMany(Avaliacao, {
    foreignKey: 'restaurante_id'
  })
  