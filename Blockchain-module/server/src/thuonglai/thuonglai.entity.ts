import {
  Table,
  Model,
  Column,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({ freezeTableName: true })
export class tbl_thuonglai extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id_thuonglai: number;

  @Column
  username: string;

  @Column
  password: string;

  @Column
  fullname_thuonglai: string;

  @Column
  avatar_thuonglai: string;

  @Column
  phone_number_thuonglai: string;

  @Column
  address_thuonglai: string;

  @Column
  email_thuonglai: string;

  @Column
  active: number;

  @Column
  company: string;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;
}
