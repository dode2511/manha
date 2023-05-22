import { DataTypes } from 'sequelize';
import { sequelize } from '../data/conecta.js';
import { Cliente } from './Cliente.js';
import { Carro } from './Carro.js';

export const Proposta = sequelize.define('proposta', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cliente_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Cliente,
        key: 'id'
    },
    carro_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Carro,
            key: 'id'
        }
    
  },
  descricao: {
    type: DataTypes.STRING(255),
    allowNull: false

  },
   resposta: {
    type: DataTypes.STRING(255),
    
  }
  }

},{
    tableName: 'propostas'
});


Cliente.belongsToMany(Carro, {through: Proposta})
Carro.belongsToMany(Cliente, {through: Proposta})
  