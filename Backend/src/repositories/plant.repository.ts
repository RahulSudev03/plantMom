import { BaseRepository } from './base.repository';
import Plant from '../models/plant.model';
import { Op } from 'sequelize';

export class PlantRepository extends BaseRepository<Plant> {
  constructor() {
    super(Plant);
  }


  async findByPlantname(name: string): Promise<Plant | null> {
    return await this.model.findOne({
      where: { name }
    });
  }

  async findByUserId(userId: number): Promise<Plant[]> {
    return await this.model.findAll({
      where: { userId }
    });
  }


  async searchPlant(searchTerm: string): Promise<Plant[]> {
    return await this.model.findAll({
      where: {
        [Op.or]: [
          { plant: { [Op.like]: `%${searchTerm}%` } },
          { species: { [Op.like]: `%${searchTerm}%` } },
        ]
      }
    });
  }
} 