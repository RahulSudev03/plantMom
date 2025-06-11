import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "users",
})
export default class User extends Model {
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
    field: "username"
  })
  username!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    },
    field: "email"
  })
  email!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    field: "password"
  })
  password!: string;

  @Column({
    type: DataType.STRING(100),
    field: "firstName"
  })
  firstName?: string;

  @Column({
    type: DataType.STRING(100),
    field: "lastName"
  })
  lastName?: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
    field: "isActive"
  })
  isActive?: boolean;

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