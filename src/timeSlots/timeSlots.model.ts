import { BelongsTo, Column, DataType, ForeignKey, Index, Model, Table, Unique } from "sequelize-typescript";
import { Doctor } from "src/doctors/doctors.model";

interface TimeSlotCreationAttrs {
    weekday: number,
    hour: number,
    minute: number,
    doctorId: number,
}

@Table
export class TimeSlot extends Model<TimeSlot, TimeSlotCreationAttrs>{
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Doctor)
    @Unique('doctor-weekday-hour-minute')
    @Column
    doctorId: number;

    @BelongsTo(() => Doctor)
    doctor: Doctor;

    @Unique('doctor-weekday-hour-minute')
    @Column({ type: 'integer', allowNull: false })
    weekday: number;

    @Unique('doctor-weekday-hour-minute')
    @Column({ type: 'integer', allowNull: false })
    hour: number;

    @Unique('doctor-weekday-hour-minute')
    @Column({ type: 'integer', allowNull: false })
    minute: number;
}