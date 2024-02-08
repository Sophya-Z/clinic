import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
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
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true})
    id: number;

    @BelongsTo(() => User)
    user: User;

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