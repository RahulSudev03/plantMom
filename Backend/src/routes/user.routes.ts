import { Router, RequestHandler } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();
const userController = new UserController();

// Create a new user
router.post('/', userController.createUser as RequestHandler);

// Get a user by ID
router.get('/:id', userController.getUser as RequestHandler);

// Update a user
router.put('/:id', userController.updateUser as RequestHandler);

// Delete a user
router.delete('/:id', userController.deleteUser as RequestHandler);

export default router; 