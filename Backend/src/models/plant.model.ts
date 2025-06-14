import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import User from './user.model';

@Table({
  tableName: "plants",
})
export default class Plant extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id"
  })
  id?: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
    field: "name"
  })
  name!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    field: "species"
  })
  species!: string;


  @Column({
    type: DataType.STRING(255),
    allowNull: true,
    field: "imageUrl"
  })
  imageUrl?: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: "userId"
  })
  userId!: number;

  @BelongsTo(() => User)
  user!: User;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    field: "createdAt"
  })
  createdAt?: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    field: "updatedAt"
  })
  updatedAt?: Date;
} 