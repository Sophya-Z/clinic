import { Module } from '@nestjs/common';
import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';
import { Appointment } from './appointments.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { DoctorsService } from 'src/doctors/doctors.service';
import { Doctor } from 'src/doctors/doctors.model';

@Module({
  controllers: [AppointmentsController],
  providers: [AppointmentsService, DoctorsService],
  imports: [
    SequelizeModule.forFeature([Appointment]),
    SequelizeModule.forFeature([Doctor])
  ]
})
export class AppointmentsModule {}
