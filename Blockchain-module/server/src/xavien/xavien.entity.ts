import {
  AutoIncrement,
  Column,
  CreatedAt,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({ freezeTableName: true })
export class tbl_xavien extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id_xavien: number;

  @Column
  username: string;

  @Column
  password: string;

  @Column
  fullname_xavien: string;

  @Column
  avatar_xavien: string;

  @Column
  phone_number_xavien: string;

  @Column
  email_xavien: string;

  @Column
  address_xavien: string;

  @Column
  day_of_birth_xavien: string;

  @Column
  roles: string;

  @Column
  id_hoptacxa: number;

  @CreatedAt
  @Column
  created_at?: Date;

  @UpdatedAt
  @Column
  updated_at: Date;
}
