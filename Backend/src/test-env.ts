import dotenv from 'dotenv';

dotenv.config();

console.log('Environment variables:');
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_NAME:', process.env.DB_NAME);
// Not logging password for security
console.log('PORT:', process.env.PORT); 