import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Doctor } from "src/doctors/doctors.model";
import { User } from "src/users/users.model";

interface AccountCreationAttrs {
    id: number,
    email: string,
    password: string,
    role: string;
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
    @Column({ type: 'text', allowNull: false })
    role: string;
}