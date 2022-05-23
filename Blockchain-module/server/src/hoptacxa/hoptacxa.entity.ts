import { AutoIncrement, Column, CreatedAt, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";

@Table({ freezeTableName: true })
export class tbl_hoptacxa extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id_hoptacxa: number

    @Column
    name_hoptacxa: string

    @Column
    address_hoptacxa: string

    @Column
    phone_number: string

    @Column
    email_hoptacxa: string

    @Column
    active: number

    @CreatedAt
    @Column
    created_at: Date

    @UpdatedAt
    @Column
    updated_at: Date
}