import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, ForeignKey, HasOne, Model, Table, BelongsTo, HasMany } from "sequelize-typescript";
import { Account } from "src/accounts/accounts.model";
import { Appointment } from "src/appointments/appointments.model";

interface UserCreationAttrs {
    surname: string,
    user_name: string,
    patronymic?: string,
    birthday: Date,
    passportSeries: number,
    passportNumber: number,
    passportBeenUsed: string,
    departmentCode: number,
    dateIssue: Date,
    snils: string,
    inn: number,
    residentialAddress?: string,
    phoneNumber: string,
    // email: string,
    // password: string
}

@Table
export class User extends Model{
    @ApiProperty({example: '1', description: 'id'})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Захарчук', description: 'Фамилия'})
    @Column({ type: 'text', allowNull: false })
    surname: string;

    @ApiProperty({example: 'Софья', description: 'Имя'})
    @Column({ type: 'text', allowNull: false })
    name: string;

    @ApiProperty({example: 'Игоревна', description: 'Отчество'})
    @Column({ type: 'text', allowNull: true })
    patronymic?: string;

    @ApiProperty({example: '12.12.2001', description: 'Дата рождения'})
    @Column({ type: 'date', allowNull: false })
    birthday: Date;

    @ApiProperty({example: '1234', description: 'Серия паспорта'})
    @Column({ type: 'integer', allowNull: false })
    passportSeries: number;

    @ApiProperty({example: '456789', description: 'Номер паспорта'})
    @Column({ type: 'integer', allowNull: false })
    passportNumber: number;

    @ApiProperty({example: 'Отделом УФМС Росси по Саратовской области', description: 'Паспорт выдан'})
    @Column({ type: 'text', allowNull: false })
    passportBeenUsed: string;

    @ApiProperty({example: '123', description: 'Код организации'})
    @Column({ type: 'integer', allowNull: false })
    departmentCode: number;

    @ApiProperty({example: '10.10.2020', description: 'Дата выдачи'})
    @Column({ type: 'date', allowNull: false })
    dateIssue: Date;

    @ApiProperty({example: '123-456-789 12', description: 'СНИЛС'})
    @Column({ type: 'text', allowNull: false, unique: true })
    snils: string;

    @ApiProperty({example: '12345679012', description: 'ИНН'})
    @Column({ type: 'bigint', allowNull: false, unique: true })
    inn: number;

    @ApiProperty({example: 'г. Энгельс, ул. Колотилова, д. 155, кв. 82', description: 'Адрес проживания'})
    @Column({ type: 'text', allowNull: true })
    residentialAddress: string;

    @ApiProperty({example: '8(912)345-67-89', description: 'Номер телефона'})
    @Column({ type: 'text', allowNull: false, unique: true })
    phoneNumber: string;

    @BelongsTo(() => Account)
    account: Account;

    @Column({ type: DataType.INTEGER, allowNull: false, unique: true })
    @ForeignKey(() => Account)
    accountId: number;

    @HasMany(() => Appointment)
    appointments: Appointment[];
}