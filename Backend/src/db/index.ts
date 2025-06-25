import { Sequelize } from 'sequelize-typescript';
import User from '../models/user.model';
import Plant from '../models/plant.model';
import { config, dialect } from '../db/config';

const sequelize = new Sequelize({
  host: config.HOST,
  database: config.DB,
  dialect: dialect,
  username: config.USER,
  password: config.PASSWORD,
  models: [User,Plant],
  logging: false,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle
  }
});

export const initDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to database has been established successfully.');
    
    // Sync all models with database
    await sequelize.sync({ alter: true });
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw error;
  }
};

export default sequelize; 