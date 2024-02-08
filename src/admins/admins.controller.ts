import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Admin } from './admins.model';

@ApiTags('Администратор')
@Controller('admins')
export class AdminsController {
    constructor(private adminsService: AdminsService){}

    @ApiOperation({summary: 'Создание админа'})
    @ApiResponse({status: 200, type: Admin})
    @Post()
    create(@Body() adminDto: CreateAdminDto){
        return this.adminsService.createAdmin(adminDto);
    }

    @ApiOperation({summary: 'Просмотр админов'})
    @ApiResponse({status: 200, type: [Admin]})
    @Get()
    getAll(){
        return this.adminsService.getAllAdmins();
    }
}
