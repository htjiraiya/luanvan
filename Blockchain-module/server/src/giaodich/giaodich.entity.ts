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
export class tbl_giaodich extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id_giaodich: number;

  @Column
  id_lohang: number;

  @Column
  id_thuonglai: number;

  @Column
  date_giaodich: Date;

  @Column
  image_giaodich: string;

  @Column
  number_giaodich: number;

  @Column
  status_giaodich: string;

  @Column
  status_htx: string;

  @Column
  status_thuonglai: string;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;
}
