import { PlantRepository } from '../repositories/plant.repository';
import Plant from '../models/plant.model';

export class PlantService {
  private plantRepository: PlantRepository;

  constructor() {
    this.plantRepository = new PlantRepository();
  }

  async createPlant(plantData: Partial<Plant>): Promise<Plant> {
    // Add any business logic here (e.g., validation)
    return await this.plantRepository.create(plantData);
  }

  async getPlantById(id: number, userId: number): Promise<Plant | null> {
    const plant = await this.plantRepository.findById(id);
    if (plant && plant.userId === userId) {
      return plant;
    }
    return null;
  }

  async getPlantsByUser(userId: number): Promise<Plant[]> {
    return await this.plantRepository.findByUserId(userId);
  }

  async updatePlant(id: number, plantData: Partial<Plant>, userId: number): Promise<[number, Plant[]]> {
    // Verify plant belongs to user before updating
    const plant = await this.getPlantById(id, userId);
    if (!plant) {
      return [0, []];
    }
    return await this.plantRepository.update(id, plantData);
  }

  async deletePlant(id: number, userId: number): Promise<number> {
    // Verify plant belongs to user before deleting
    const plant = await this.getPlantById(id, userId);
    if (!plant) {
      return 0;
    }
    return await this.plantRepository.delete(id);
  }

  async searchPlants(searchTerm: string, userId: number): Promise<Plant[]> {
    const plants = await this.plantRepository.searchPlant(searchTerm);
    return plants.filter(plant => plant.userId === userId);
  }
}