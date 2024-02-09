import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { AccountRoles } from "./account-roles.model";
import { Account } from "src/accounts/accounts.model";

interface RoleCreationAttrs {
    value: string,
}

@Table
export class Role extends Model<Role, RoleCreationAttrs>{
    @ApiProperty({example: '1', description: 'id'})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Админ', description: 'Роль пользователя'})
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    value: string;

    @BelongsToMany(() => Account, () => AccountRoles)
    accounts: Account[];
}