import { DataTypes } from 'sequelize';
import { sequelize } from '../data/conecta.js';
import {Cliente} from "./Cliente.js" 

export const Destino = sequelize.define('destino', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  passagem: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  preco: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});


Destino.belongsTo(Cliente, {
    foreignKey: {
      name: 'Cliente_id',
      allowNull: false
    },    
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  })
  
    Cliente.hasMany(Destino, {
    foreignKey: 'Cliente_id',
  })
