import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasOne, Model, Table } from "sequelize-typescript";
import { Account } from "src/accounts/accounts.model";

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
    email: string,
    password: string
}

@Table
export class User extends Model<User, UserCreationAttrs>{
    @ApiProperty({example: '1', description: 'id'})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id_user: number;

    @ApiProperty({example: 'Захарчук', description: 'Фамилия'})
    @Column({ type: 'text', allowNull: false })
    surname: string;

    @ApiProperty({example: 'Софья', description: 'Имя'})
    @Column({ type: 'text', allowNull: false })
    user_name: string;

    @ApiProperty({example: 'Игоревна', description: 'Отчество'})
    @Column({ type: 'text', allowNull: true })
    patronymic?: string;

    @ApiProperty({example: '12.12.2001', description: 'Дата рождения'})
    @Column({ type: 'date', allowNull: false })
    birthday: Date;

    @ApiProperty({example: '1234', description: 'Серия паспорта'})
    @Column({ type: 'integer', allowNull: false })
    passport_series: number;

    @ApiProperty({example: '456789', description: 'Номер паспорта'})
    @Column({ type: 'integer', allowNull: false })
    passport_number: number;

    @ApiProperty({example: 'Отделом УФМС Росси по Саратовской области', description: 'Паспорт выдан'})
    @Column({ type: 'text', allowNull: false })
    passport_been_used: string;

    @ApiProperty({example: '123', description: 'Код организации'})
    @Column({ type: 'integer', allowNull: false })
    department_code: number;

    @ApiProperty({example: '10.10.2020', description: 'Дата выдачи'})
    @Column({ type: 'date', allowNull: false })
    date_issue: Date;

    @ApiProperty({example: '123-456-789 12', description: 'СНИЛС'})
    @Column({ type: 'text', allowNull: false, unique: true })
    snils: string;

    @ApiProperty({example: '12345679012', description: 'ИНН'})
    @Column({ type: 'bigint', allowNull: false, unique: true })
    inn: number;

    @ApiProperty({example: 'г. Энгельс, ул. Колотилова, д. 155, кв. 82', description: 'Адрес проживания'})
    @Column({ type: 'text', allowNull: true })
    residential_address: string;

    @ApiProperty({example: '8(912)345-67-89', description: 'Номер телефона'})
    @Column({ type: 'text', allowNull: false, unique: true })
    phone_number: string;
    
    @HasOne(() => Account)
    account: Account;
}