import {
  Table,
  Model,
  PrimaryKey,
  AutoIncrement,
  Column,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({ freezeTableName: true })
export class tbl_thuocbaovethucvat extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id_thuocbaovethucvat: number;

  @Column
  name_thuocbaovethucvat: string;

  @Column
  date_thuocbaovethucvat: Date;

  @Column
  price_thuocbaovethucvat: number;

  @Column
  unit_thuocbaovethucvat: string;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;
}
