import DataTypes from 'sequelize';
import sequelize from '../config/database.js';

const produto = sequelize.define('Produto', {
    
    }, {
      tableName: 'Produto',
      timestamps: false
    });
  
export default produto;
  