import { sequelize } from "../data/conecta.js";
import { DataTypes } from "sequelize";

export const Animal = sequelize.define("Animal", {
 id: {
    type:DataTypes.INTEGER,
    allowNull:false,
    primaryKey: true,
    autoIncrement: true
  },
 nome: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
 raca: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
 idade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
 custo_mensal: {
    type: DataTypes.REAL,
    allowNull: false
  },
  ambiente: {
    type: DataTypes.STRING(40),
    allowNull: true,
    defaultValue: "terrestre"
  }
  
  


});

