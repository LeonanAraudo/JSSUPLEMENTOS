import DataTypes from 'sequelize';
import sequelize from '../config/database.js';

const produto = sequelize.define('Produto', {
    Produto_id:{
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
    },
    Nome:{
      type: DataTypes.STRING,
      allowNull:true,
    },
    Preco:{
      type: DataTypes.STRING,
      allowNull:true,
    },
    Descricao:{
      type: DataTypes.STRING,
      allowNull:true,
    },
    Data_cad:{
      type: DataTypes.DATE,
      allowNull:true,
    },
    Marca:{
      type: DataTypes.STRING,
      allowNull:true,
    },
    Sabor:{
      type: DataTypes.STRING,
      allowNull:true,
    },
    Peso_Produto:{
      type: DataTypes.STRING,
      allowNull:true,
    },
    Quantidade:{
      type: DataTypes.INTEGER,
      allowNull:true,
    },
    Foto:{
      type: DataTypes.MEDIUMINT,
      allowNull:true,
    },
    Tipo_produto:{
      type: DataTypes.STRING,
      allowNull:true,
    },
    Preco_Antes:{
      type: DataTypes.STRING,
      allowNull:true,
    },
    }, {
      tableName: 'produto',
      timestamps: false
    });
  
export default produto;
  