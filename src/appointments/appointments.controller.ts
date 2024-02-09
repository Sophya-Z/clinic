import { Body, Controller, Get, Header, Post } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Appointment } from './appointments.model';

@ApiTags('Записи на приём')
@Controller('appointments')
export class AppointmentsController {
    constructor(private appointmentsService: AppointmentsService){}
    
    @ApiOperation({summary: 'Создание записи на приём'})
    @ApiResponse({status: 200, type: Appointment})
    @Post()
    create(@Body() appointmentsDto: CreateAppointmentDto){
        return this.appointmentsService.createAppointment(appointmentsDto);
    }

    
    @ApiOperation({summary: 'Получение всех записей'})
    @ApiResponse({status: 200, type: Appointment})
    @Get()
    getAll(){
        return this.appointmentsService.getAllAppointments();
    }

    // @Get()
    // getAppointmentsForDate(Header: date){
    //     return this.appointmentsService.getAppointmentsForDate();
    // }
}
