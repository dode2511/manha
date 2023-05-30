import { DataTypes } from 'sequelize';
import { sequelize } from '../database/conecta.js';
import { Curso } from './Curso.js';


export const Matricula = sequelize.define('matricula', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  turno: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
},{
    tableName: 'matriculas'
});

Matricula.belongsTo(Curso, {
    foreignKey: {
      name: 'curso_id',
      allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  })
  
Curso.hasMany(Matricula, {
    foreignKey: 'curso_id'
  })
  