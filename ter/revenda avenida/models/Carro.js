import { DataTypes } from 'sequelize';
import { sequelize } from '../data/conecta.js';
import {Usuario} from "./Usuario.js" 

export const Carro = sequelize.define('carro', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  marca: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  modelo: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  preco: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  ano: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});


Carro.belongsTo(Usuario, {
    foreignKey: {
      name: 'Usuario_id',
      allowNull: false
    },    
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  })
  
    Usuario.hasMany(Carro, {
    foreignKey: 'Usuario_id',
  })

