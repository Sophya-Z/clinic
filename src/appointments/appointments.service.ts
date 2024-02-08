import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Appointment } from './appointments.model';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

@Injectable()
export class AppointmentsService {
    constructor(@InjectModel(Appointment) private appointmentRepository: typeof Appointment) {

    }

    async createAppointment(dto: CreateAppointmentDto){
        const appointment = await this.appointmentRepository.create(dto);
        return appointment;
    }

    async getAllAppointments(){
        const appointments = await this.appointmentRepository.findAll();
        return appointments;
    }

    // async getAppointmentsForDate(date: Date){
    //     const appointmentsForDate = await this.appointmentRepository.findAll({include: date});
    //     return appointmentsForDate;
    // }
}
