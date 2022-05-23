import { AutoIncrement, Column, CreatedAt, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";

@Table({ freezeTableName: true })
export class tbl_nhatkydongruong {
    @PrimaryKey
    @AutoIncrement
    @Column
    id_nhatkydongruong: number

    @Column
    id_lichmuavu: number

    @Column
    id_xavien: number

    @CreatedAt
    @Column
    create_at: Date

    @UpdatedAt
    @Column
    update_at: Date
}