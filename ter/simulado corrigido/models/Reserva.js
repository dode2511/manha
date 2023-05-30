import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';
import { Cliente } from './Cliente.js';
import { Excursao } from './Excursao.js';

export const Reserva = sequelize.define('reserva', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quant: {
    type: DataTypes.INTEGER(4),
    allowNull: false
  },
  preco: {
    type: DataTypes.DECIMAL(9, 2),
    allowNull: false
  }
}, {
  tableName: "reservas"
});

Reserva.belongsTo(Cliente, {
  foreignKey: {
    name: 'cliente_id',
    allowNull: false
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})

Cliente.hasMany(Reserva, {
  foreignKey: 'cliente_id'
})

Reserva.belongsTo(Excursao, {
  foreignKey: {
    name: 'excursao_id',
    allowNull: false
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})

Excursao.hasMany(Reserva, {
  foreignKey: 'excursao_id'
})
