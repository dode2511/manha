import { DataTypes } from 'sequelize';
import { sequelize } from '../data/conecta.js';
import {Cliente} from "./Cliente.js" 

export const Excursao = sequelize.define('excursao', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  local: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  guia: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  preco: {
    type: DataTypes.DECIMAL(4,2),
    allowNull: false,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});


Excursao.belongsTo(Cliente, {
    foreignKey: {
      name: 'Cliente_id',
      allowNull: false
    },    
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  })
  
    Cliente.hasMany(Excursao, {
    foreignKey: 'Cliente_id',
  })

