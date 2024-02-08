import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Doctor } from "src/doctors/doctors.model";

interface TimeSlotCreationAttrs {
    week_day: number,
    hour: number,
    minute: number,
    id_doctor: number,
}

@Table
export class TimeSlot extends Model<TimeSlot, TimeSlotCreationAttrs>{
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({ type: 'integer', allowNull: false })
    week_day: number;

    @Column({ type: 'integer', allowNull: false })
    hour: number;

    @Column({ type: 'integer', allowNull: false })
    minute: number;

    @ForeignKey(() => Doctor)
  @Column
  id_doctor: number;
 
  @BelongsTo(() => Doctor)
  doctor: Doctor;
}