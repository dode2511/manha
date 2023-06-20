import { DataTypes } from 'sequelize';
import { sequelize } from '../database/conecta.js';
import { Usuario } from './usuario.js';

export const Restaurante = sequelize.define('restaurante', {
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

Restaurante.belongsTo(Usuario, {
    foreignKey: {
      name: 'usuario_id',
      allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  })
  
  Usuario.hasMany(Restaurante, {
    foreignKey: 'usuario_id'
  })
  