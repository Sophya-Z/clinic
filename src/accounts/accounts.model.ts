import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { AccountRoles } from "src/roles/account-roles.model";
import { Doctor } from "src/doctors/doctors.model";
import { User } from "src/users/users.model";

interface AccountCreationAttrs {
    id: number,
    email: string,
    password: string
}

@Table
export class Account extends Model<Account, AccountCreationAttrs>{
    @ApiProperty({example: '1', description: 'id'})
    @PrimaryKey
    @Column({ type: DataType.INTEGER, autoIncrement: true, unique: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'sofa_z@mail.ru', description: 'Адрес электронной почты'})
    @Column({ type: 'text', allowNull: false, unique: true })
    email: string;

    @ApiProperty({example: 'qwe1234', description: 'Пароль'})
    @Column({ type: 'text', allowNull: false })
    password: string;

    @ApiProperty({example: 'Administrator', description: 'Роль пользователя'})
    @BelongsToMany(() => Role, () => AccountRoles)
    role: Role[];
}