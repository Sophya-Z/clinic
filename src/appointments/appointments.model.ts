import { BelongsTo, Column, DataType, ForeignKey, Model, Table, Unique } from "sequelize-typescript";
import { Doctor } from "src/doctors/doctors.model";
import { User } from "src/users/users.model";

interface AppointmentCreationAttrs {
    day: Date,
    time: string,
    id_doctor: number,
}

@Table
export class Appointment extends Model<Appointment, AppointmentCreationAttrs>{
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @BelongsTo(() => Doctor)
    doctor: Doctor;

    @ForeignKey(() => Doctor)
    @Unique('doctor-date')
    @Column({ type: DataType.INTEGER, allowNull: true})
    doctorId: number;

    @Unique('doctor-date')
    @Column({ type: DataType.DATE, allowNull: false })
    date: Date;
    
    @Column({ type: "text", allowNull: true })
    data: string
    
    @BelongsTo(() => User)
    user: User;
    
    @Column({ type: DataType.INTEGER, allowNull: true})
    @ForeignKey(() => User)
    userId: number;


}