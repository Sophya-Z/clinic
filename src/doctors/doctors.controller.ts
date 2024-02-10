import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Doctor } from './doctors.model';
import { AddTimeSlotsDto } from './dto/addTimeSlots.dto';
import { GetAvaliableDatesDto } from './dto/getAvaliableDates.dto';
import { RolesGuard } from 'src/roles/roles.guard';
import { Roles } from 'src/roles/roles.decorator';
import { Role } from 'src/roles/role.enum';
import { AuthGuard } from 'src/auth/auth.guard';
import { start } from 'repl';

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

    @ApiOperation({summary: 'Получить доктора по id'})
    @ApiResponse({status: 200, type: Doctor})
    @Get(':id')
    getById(@Param('id') id: number){
        return this.doctorsService.getById(id);
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
    @UseGuards(AuthGuard, RolesGuard)
    @Roles(Role.Doctor)
    addTimeSlots(@Body() req: AddTimeSlotsDto){
        return this.doctorsService.addTimeSlots(req.id, req.timeSlots);
    }

    @ApiOperation({summary: 'Получение доступных дат для записи'})
    @ApiResponse({status: 200, type: [Doctor]})
    @Get(":id/avaliable-dates")
    getAvailableDates(@Param('id') id: number, @Query('startDate') startDate: Date, @Query('endDate') endDate: Date){
        return this.doctorsService.getAvailableDates(id, new Date(startDate), new Date(endDate));
    }
}
