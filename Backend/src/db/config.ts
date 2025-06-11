import dotenv from 'dotenv';

dotenv.config();

export const config = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
  };
  
  export const dialect = "mysql";