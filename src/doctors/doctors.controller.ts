import { Body, Controller, Get, Post } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Doctor } from './doctors.model';

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
}
