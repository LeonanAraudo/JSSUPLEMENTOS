import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('js_sup', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql' 
});

export default sequelize;