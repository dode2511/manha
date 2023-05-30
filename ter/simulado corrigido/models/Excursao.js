import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';
import { Destino } from './Destino.js'

export const Excursao = sequelize.define('excursao', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false
  },
  preco: {
    type: DataTypes.DECIMAL(9, 2),
    allowNull: false
  },
  quant_lugares: {
    type: DataTypes.INTEGER(4),
    allowNull: false
  },
  lugares_reservados: {
    type: DataTypes.INTEGER(4),
    defaultValue: 0
  }
}, {
  tableName: "excursoes"
});

Excursao.belongsTo(Destino, {
  foreignKey: {
    name: 'destino_id',
    allowNull: false
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})

Destino.hasMany(Excursao, {
  foreignKey: 'destino_id'
})
