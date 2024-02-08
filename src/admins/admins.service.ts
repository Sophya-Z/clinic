import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './admins.model';
import { CreateAdminDto } from './dto/create-admin.dto';

@Injectable()
export class AdminsService {
    constructor(@InjectModel(Admin) private adminRepository: typeof Admin) {

    }

    async createAdmin(dto: CreateAdminDto){
        const admin = await this.adminRepository.create(dto);
        return admin;
    }

    async getAllAdmins(){
        const admins = await this.adminRepository.findAll();
        return admins;
    }
}
