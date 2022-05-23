import { AutoIncrement, Column, CreatedAt, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";

@Table({ freezeTableName: true })
export class tbl_gionglua extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id_gionglua: number

    @Column
    name_gionglua: string

    @Column
    description_gionglua: string

    @CreatedAt
    @Column
    created_at: Date

    @UpdatedAt
    @Column
    updated_at: Date
}