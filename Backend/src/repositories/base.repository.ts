import { Model, ModelCtor } from 'sequelize-typescript';
import { WhereOptions } from 'sequelize';

export class BaseRepository<T extends Model> {
  protected model: ModelCtor<T>;

  constructor(model: ModelCtor<T>) {
    this.model = model;
  }

  async create(data: T['_creationAttributes']): Promise<T> {
    return await this.model.create(data);
  }

  async findById(id: number): Promise<T | null> {
    return await this.model.findByPk(id);
  }

  async findAll(options = {}): Promise<T[]> {
    return await this.model.findAll(options);
  }

  async update(id: number, data: Partial<T>): Promise<[number, T[]]> {
    const where: WhereOptions<T> = { id: id as any };
    const [affectedCount, affectedRows] = await this.model.update(data, {
      where,
      returning: true,
    });
    return [affectedCount, affectedRows];
  }

  async delete(id: number): Promise<number> {
    const where: WhereOptions<T> = { id: id as any };
    return await this.model.destroy({
      where
    });
  }
} 