import DataTypes from 'sequelize';
import sequelize from '../config/database.js';

const usuario = sequelize.define('usuario', {
      User_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Tipo_User:{
        type: DataTypes.STRING,
        allowNull: true,
    },
      Nome: {
        type: DataTypes.STRING,
        allowNull: true
      },
      Senha: {
        type: DataTypes.STRING,
        allowNull: true
      },
      Telefone: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    }, {
      tableName: 'usuario',
      timestamps: false
    });
  
export default usuario;
  