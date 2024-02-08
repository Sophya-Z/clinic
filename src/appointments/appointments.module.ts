import { Module } from '@nestjs/common';
//import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';
import { Appointment } from './appointments.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  // controllers: [AppointmentsController],
  providers: [AppointmentsService],
  imports: [
    SequelizeModule.forFeature([Appointment])
  ]
})
export class AppointmentsModule {}
