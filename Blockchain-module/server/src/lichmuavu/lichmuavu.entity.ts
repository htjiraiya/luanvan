import { AutoIncrement, Column, CreatedAt, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";

@Table({ freezeTableName: true })
export class tbl_lichmuavu {
    @PrimaryKey
    @AutoIncrement
    @Column
    id_lichmuavu: number

    @Column
    name_lichmuavu: string

    @Column
    id_gionglua: number

    @Column
    id_hoptacxa: number

    @CreatedAt
    @Column
    create_at: Date

    @UpdatedAt
    @Column
    update_at: Date
}