import { Router, RequestHandler } from 'express';
import { PlantController } from '../controllers/plant.controller';

const router = Router();
const plantController = new PlantController();

// Create a new plant for a specific user
router.post('/users/:userId/plants', plantController.createPlant as RequestHandler);

// Get all plants for a specific user
router.get('/users/:userId/plants', plantController.getUserPlants as RequestHandler);

// Get a specific plant
router.get('/users/:userId/plants/:plantId', plantController.getPlant as RequestHandler);

// Update a plant
router.put('/users/:userId/plants/:plantId', plantController.updatePlant as RequestHandler);

// Delete a plant
router.delete('/users/:userId/plants/:plantId', plantController.deletePlant as RequestHandler);

export default router;