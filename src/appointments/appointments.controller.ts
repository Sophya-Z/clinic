// import { Body, Controller, Get, Header, Post } from '@nestjs/common';
// import { AppointmentsService } from './appointments.service';
// import { CreateAppointmentDto } from './dto/create-appointment.dto';

// @Controller('appointments')
// export class AppointmentsController {
//     constructor(private appointmentsService: AppointmentsService){}
//     @Post()
//     create(@Body() appointmentsDto: CreateAppointmentDto){
//         return this.appointmentsService.createAppointment(appointmentsDto);
//     }

//     @Get()
//     getAll(){
//         return this.appointmentsService.getAllAppointments();
//     }

//     @Get()
//     getAppointmentsForDate(Header: date){
//         return this.appointmentsService.getAppointmentsForDate();
//     }
// }
