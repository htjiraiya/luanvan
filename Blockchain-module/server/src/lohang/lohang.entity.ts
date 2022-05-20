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
export class tbl_lohang extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id_lohang: number;

  @Column
  name_lohang: string;

  @Column
  id_gionglua: number;

  @Column
  id_nhatkydongruong: number;

  @Column
  id_xavien: number;

  @Column
  date_thuhoach: Date;

  @Column
  image_lohang: string;

  @Column
  status_lohang: string;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;
}
