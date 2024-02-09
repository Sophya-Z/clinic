import { Body, Controller, Get, Post } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Doctor } from './doctors.model';
import { AddTimeSlotsDto } from './dto/addTimeSlots.dto';
import { GetAvaliableDatesDto } from './dto/getAvaliableDates.dto';

@ApiTags('Доктор')
@Controller('doctors')
export class DoctorsController {
    constructor(private doctorsService: DoctorsService){}

    @ApiOperation({summary: 'Создание доктора'})
    @ApiResponse({status: 200, type: Doctor})
    @Post()
    create(@Body() doctorDto: CreateDoctorDto){
        return this.doctorsService.createDoctor(doctorDto);
    }

    @ApiOperation({summary: 'Просмотр всех докторов'})
    @ApiResponse({status: 200, type: [Doctor]})
    @Get()
    getAll(){
        return this.doctorsService.getAllDoctors();
    }

    @ApiOperation({summary: 'Добавление тайм слотов'})
    @ApiResponse({status: 200, type: [Doctor]})
    @Post("add-time-slots")
    addTimeSlots(@Body() req: AddTimeSlotsDto){
        return this.doctorsService.addTimeSlots(req.id, req.timeSlots);
    }

    @ApiOperation({summary: 'Получение доступных дат для записи'})
    @ApiResponse({status: 200, type: [Doctor]})
    @Post("get-avaliable-dates")
    getAvailableDates(@Body() req: GetAvaliableDatesDto){
        return this.doctorsService.getAvailableDates(req.id, new Date(req.startDate), new Date(req.endDate));
    }
}
