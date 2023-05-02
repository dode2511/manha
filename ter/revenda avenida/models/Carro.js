import { DataTypes } from 'sequelize';
import { sequelize } from '../data/conecta.js';
import { Cliente } from './Cliente.js';

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
  dataFab: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  proposta: {
    type: DataTypes.DECIMAL(8,2),
    allowNull: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});


Carro.belongsTo(Cliente, {
    foreignKey: {
      name: 'cliente_id',
      allowNull: false
    },    
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  })
  
    Cliente.hasMany(Carro, {
    foreignKey: 'cliente_id',
  })

  
Carro.belongsTo(Vendedor, {
    foreignKey: {
      name: 'Vendedor_id',
      allowNull: false
    },    
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  })
