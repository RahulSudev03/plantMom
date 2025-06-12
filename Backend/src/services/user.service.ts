import { UserRepository } from '../repositories/user.repository';
import User from '../models/user.model';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(userData: Partial<User>): Promise<User> {
    // Add any business logic here (e.g., password hashing, validation)
    return await this.userRepository.create(userData);
  }

  async getUserById(id: number): Promise<User | null> {
    return await this.userRepository.findById(id);
  }

  async updateUser(id: number, userData: Partial<User>): Promise<[number, User[]]> {
    // Add any business logic here
    return await this.userRepository.update(id, userData);
  }

  async deleteUser(id: number): Promise<number> {
    return await this.userRepository.delete(id);
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findByEmail(email);
  }

  async searchUsers(searchTerm: string): Promise<User[]> {
    return await this.userRepository.searchUsers(searchTerm);
  }
} 