import { DataTypes } from 'sequelize';
import { sequelize } from '../database/conecta.js';
import { Matricula } from './Matricula.js';


export const Aluno = sequelize.define('aluno', {
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
    allowNull: true
  },
  Turma: {
    type: DataTypes.STRING(5),
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  endereco: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
});




Matricula.belongsTo(Aluno, {
    foreignKey: {
      name: 'aluno_id',
      allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  })
  
  Aluno.hasMany(Matricula, {
    foreignKey: 'aluno_id'
  })
  