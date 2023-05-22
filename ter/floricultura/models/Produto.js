import { DataTypes } from 'sequelize';
import { sequelize } from '../data/conecta.js';
import {Cliente} from "./Cliente.js" 

export const Porduto = sequelize.define('produto', {
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
  preco: {
    type: DataTypes.DECIMAL(4,2),
    allowNull: false,
  },
  qtdEstq: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});


Porduto.belongsTo(Cliente, {
    foreignKey: {
      name: 'Cliente_id',
      allowNull: false
    },    
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  })
  
    Cliente.hasMany(Porduto, {
    foreignKey: 'Cliente_id',
  })

