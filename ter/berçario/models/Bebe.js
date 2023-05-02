import { DataTypes } from 'sequelize';
import { sequelize } from '../data/conecta.js';
import { Mae } from './mae.js';
import { Medico } from './medico.js';


export const Bebe = sequelize.define('bebe', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  dataNasc: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  peso: {
    type: DataTypes.DECIMAL(6,3),
    allowNull: false,
  },
  altura: {
    type: DataTypes.DECIMAL(4,2),
    allowNull: false,
  },
});


Bebe.belongsTo(Mae, {
    foreignKey: {
      name: 'mae_id',
      allowNull: false
    },    
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  })
  
  Mae.hasMany(Bebe, {
    foreignKey: 'mae_id',
  })

  
Bebe.belongsTo(Medico, {
    foreignKey: {
      name: 'medico_id',
      allowNull: false
    },    
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  })
  
  Medico.hasMany(Bebe, {
    foreignKey: 'medico_id',
  })