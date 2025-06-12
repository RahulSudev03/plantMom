import { BaseRepository } from './base.repository';
import User from '../models/user.model';
import { Op } from 'sequelize';

export class UserRepository extends BaseRepository<User> {
  constructor() {
    super(User);
  }

  // Additional user-specific methods
  async findByEmail(email: string): Promise<User | null> {
    return await this.model.findOne({
      where: { email }
    });
  }

  async findByUsername(username: string): Promise<User | null> {
    return await this.model.findOne({
      where: { username }
    });
  }

  async findActiveUsers(): Promise<User[]> {
    return await this.model.findAll({
      where: { isActive: true }
    });
  }

  async searchUsers(searchTerm: string): Promise<User[]> {
    return await this.model.findAll({
      where: {
        [Op.or]: [
          { username: { [Op.like]: `%${searchTerm}%` } },
          { email: { [Op.like]: `%${searchTerm}%` } },
          { firstName: { [Op.like]: `%${searchTerm}%` } },
          { lastName: { [Op.like]: `%${searchTerm}%` } }
        ]
      }
    });
  }
} 