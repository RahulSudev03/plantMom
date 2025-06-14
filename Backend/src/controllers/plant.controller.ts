import { Request, Response } from 'express';
import { PlantService } from '../services/plant.service';

export class PlantController {
  private plantService: PlantService;

  constructor() {
    this.plantService = new PlantService();
    // Bind all methods to preserve 'this' context
    this.createPlant = this.createPlant.bind(this);
    this.getPlant = this.getPlant.bind(this);
    this.getUserPlants = this.getUserPlants.bind(this);
    this.updatePlant = this.updatePlant.bind(this);
    this.deletePlant = this.deletePlant.bind(this);
  }

  async createPlant(req: Request, res: Response) {
    try {
      const userId = parseInt(req.params.userId);
      const plantData = { ...req.body, userId };
      const plant = await this.plantService.createPlant(plantData);
      res.status(201).json(plant);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getPlant(req: Request, res: Response) {
    try {
      const userId = parseInt(req.params.userId);
      const plantId = parseInt(req.params.plantId);
      const plant = await this.plantService.getPlantById(plantId, userId);
      if (!plant) {
        return res.status(404).json({ message: 'Plant not found' });
      }
      res.json(plant);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getUserPlants(req: Request, res: Response) {
    try {
      const userId = parseInt(req.params.userId);
      const plants = await this.plantService.getPlantsByUser(userId);
      res.json(plants);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async updatePlant(req: Request, res: Response) {
    try {
      const userId = parseInt(req.params.userId);
      const plantId = parseInt(req.params.plantId);
      const plantData = req.body;
      const [count, plants] = await this.plantService.updatePlant(plantId, plantData, userId);
      if (count === 0) {
        return res.status(404).json({ message: 'Plant not found' });
      }
      res.json(plants[0]);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async deletePlant(req: Request, res: Response) {
    try {
      const userId = parseInt(req.params.userId);
      const plantId = parseInt(req.params.plantId);
      const count = await this.plantService.deletePlant(plantId, userId);
      if (count === 0) {
        return res.status(404).json({ message: 'Plant not found' });
      }
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}