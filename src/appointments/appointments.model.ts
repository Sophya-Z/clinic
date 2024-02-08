import { Column, DataType, Model, Table } from "sequelize-typescript";

interface AppointmentCreationAttrs {
    day: Date,
    time: string,
    id_doctor: number,
}

@Table
export class Appointment extends Model<Appointment, AppointmentCreationAttrs>{
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id_appointment: number;

    @Column({ type: 'date', allowNull: false })
    day: Date;

    @Column({ type: 'text', allowNull: false })
    time: string;

    @Column({ type: 'integer', allowNull: true })
    id_doctor: number;

    @Column({ type: 'integer', allowNull: false })
    id_user: number;

    @Column({ type: 'text', allowNull: false })
    appointment_data: string;

    @Column({ type: 'boolean', allowNull: false })
    status: boolean;
}