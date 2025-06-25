import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import plantRoutes from './routes/plant.routes';
import { initDB } from './db';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api', plantRoutes);

// Initialize database
initDB().catch(console.error);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app; 