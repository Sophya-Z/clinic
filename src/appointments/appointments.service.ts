import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Appointment } from './appointments.model';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { DoctorsService } from 'src/doctors/doctors.service';

@Injectable()
export class AppointmentsService {
    constructor(
        @InjectModel(Appointment) private appointmentRepository: typeof Appointment, 
        private doctorService: DoctorsService
    ) {}

    async createAppointment(dto: CreateAppointmentDto){
        let isValidDate = await this.doctorService.checkDate(dto.doctorId, new Date(dto.date))
        console.log(isValidDate)
        if (!isValidDate) {
            return
        }
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
