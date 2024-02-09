import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Role } from "./roles.model";
import { Account } from "src/accounts/accounts.model";

@Table({tableName: 'account_roles', createdAt: false, updatedAt: false})
export class AccountRoles extends Model<AccountRoles>{
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Role)
    @Column({ type: DataType.INTEGER })
    id_role: number;

    @ForeignKey(() => Account)
    @Column({ type: DataType.INTEGER })
    id_account: number;
}