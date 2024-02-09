import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Account } from "src/accounts/accounts.model";
import { Appointment } from "src/appointments/appointments.model";
import { TimeSlot } from "src/timeSlots/timeSlots.model";

interface DoctorCreationAttrs {
    surname: string,
    name: string,
    patronymic?: string,
    birthday: Date,
    description: string,
    phoneNumber: string,
    email: string,
    password: string,
    account: Account
}

@Table
export class Doctor extends Model{
    @ApiProperty({example: '1', description: 'id'})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

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

    @ApiProperty({example: 'Врач-офтальмолог', description: 'Описание'})
    @Column({ type: 'text', allowNull: true })
    description: string;

    @ApiProperty({example: '8(908)765-54-32', description: 'Номер телефона'})
    @Column({ type: 'text', allowNull: false, unique: true })
    phone: string;

    @ApiProperty({example: [], description: 'График'})
    @HasMany(() => TimeSlot)
    timeSlots: TimeSlot[];

    @BelongsTo(() => Account)
    account: Account;

    @Column({ type: DataType.INTEGER, allowNull: true, unique: true })
    @ForeignKey(() => Account)
    accountId: number;

    @HasMany(() => Appointment)
    appointments: Appointment[];
}