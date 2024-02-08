import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { TimeSlot } from "src/timeSlots/timeSlots.model";

interface AdminCreationAttrs {
    surname: string,
    name: string,
    patronymic?: string,
    birthday: Date,
    description: string,
    phoneNumber: string,
    email: string,
    password: string
}

@Table
export class Admin extends Model<Admin, AdminCreationAttrs>{
    @ApiProperty({example: '1', description: 'id'})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id_admin: number;

    @ApiProperty({example: 'Иванов', description: 'Фамилия'})
    @Column({ type: 'text', allowNull: false })
    surname: string;

    @ApiProperty({example: 'Иван', description: 'Имя'})
    @Column({ type: 'text', allowNull: false })
    name: string;

    @ApiProperty({example: 'Иванович', description: 'Отчество'})
    @Column({ type: 'text', allowNull: true })
    patronymic?: string;

    @ApiProperty({example: '09.02.1990', description: 'Дата рождения'})
    @Column({ type: 'date', allowNull: false })
    birthday: Date;

    @ApiProperty({example: '8(908)765-54-32', description: 'Номер телефона'})
    @Column({ type: 'text', allowNull: false, unique: true })
    phone_number: string;

    @ApiProperty({example: 'admin@mail.ru', description: 'Адрес электронной почты'})
    @Column({ type: 'text', allowNull: false, unique: true })
    email: string;

    @ApiProperty({example: '09021990', description: 'Пароль'})
    @Column({ type: 'text', allowNull: false })
    password: string;
}