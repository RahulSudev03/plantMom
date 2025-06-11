import express from 'express';
import { initDB } from './db/index';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize database
initDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
  }); 