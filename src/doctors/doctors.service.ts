import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Doctor } from './doctors.model';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { TimeSlot } from 'src/timeSlots/timeSlots.model';

@Injectable()
export class DoctorsService {
    constructor(@InjectModel(Doctor) private doctorRepository: typeof Doctor) {

    }

    async createDoctor(dto: CreateDoctorDto){
        const doctor = await this.doctorRepository.create(dto);
        return doctor;
    }

    // async getAllDoctors(){
    //     const users = await this.userRepository.findAll();
    //     return users;
    // }

    async getAllDoctors(){
        const doctors = await this.doctorRepository.findAll({include: TimeSlot});
        return doctors;
    }

    async findOne(email: string){
        const doctor = await this.doctorRepository.findOne(
            {where:
                {email: email}
            }
        );
        return doctor;
    }
}
