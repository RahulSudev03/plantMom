import { UserRepository } from '../repositories/user.repository';
import User from '../models/user.model';
import bcrypt from 'bcrypt';
import { JWTUtils, JWTPayload } from '../utils/jwt';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(userData: Partial<User>): Promise<User> {
    // Hash password before saving
    if (userData.password) {
      userData.password = await this.hashPassword(userData.password);
    }
    return await this.userRepository.create(userData);
  }

  async login(email: string, password: string): Promise<{ user: User; token: string }> {
    // Find user by email
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Verify password
    const isValidPassword = await this.verifyPassword(password, user.password);
    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    // Generate JWT payload
    const payload: JWTPayload = {
      userId: user.id!,
      email: user.email,
      username: user.username,
    };

    // Generate token
    const token = JWTUtils.generateToken(payload);

    return { user, token };
  }

  async getUserById(id: number): Promise<User | null> {
    return await this.userRepository.findById(id);
  }

  async updateUser(id: number, userData: Partial<User>): Promise<[number, User[]]> {
    // Hash password if it's being updated
    if (userData.password) {
      userData.password = await this.hashPassword(userData.password);
    }
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

  // Password hashing utility methods
  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  private async verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
} 