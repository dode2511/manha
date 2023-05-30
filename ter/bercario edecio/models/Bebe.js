import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';
import { Mae } from './Mae.js';
import { Medico } from './Medico.js';

export const Bebe = sequelize.define('bebe', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  datanasc: {
    type: DataTypes.DATE,
    allowNull: false
  },
  peso: {
    type: DataTypes.DECIMAL(6,3),
    allowNull: false
  },
  altura: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
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
  foreignKey: 'mae_id'
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
  foreignKey: 'medico_id'
})
