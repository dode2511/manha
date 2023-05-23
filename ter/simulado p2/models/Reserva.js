import { DataTypes } from 'sequelize';
import { sequelize } from '../data/conecta.js';
import {Cliente} from "./Cliente.js" 

export const Reserva = sequelize.define('reserva', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  local: {
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
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});


Reserva.belongsTo(Cliente, {
    foreignKey: {
      name: 'Cliente_id',
      allowNull: false
    },    
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  })
  
    Cliente.hasMany(Reserva, {
    foreignKey: 'Cliente_id',
  })

