import { Sequelize } from "sequelize";


const sequelize = new Sequelize('juegos_de_mesa', 'root', 'admin123', {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    mode: ''
  }
});

export default sequelize;