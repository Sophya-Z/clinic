import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Doctor } from './doctors.model';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { TimeSlot } from 'src/timeSlots/timeSlots.model';
import { TimeSlotDto } from './dto/addTimeSlots.dto';
import { Account } from 'src/accounts/accounts.model';
import { Appointment } from 'src/appointments/appointments.model';
import { Role } from 'src/roles/role.enum';
import moment from 'moment';

 @Injectable()
export class DoctorsService {
    constructor(@InjectModel(Doctor) private doctorRepository: typeof Doctor) {}

    async createDoctor(dto: CreateDoctorDto){
        const doctor = await this.doctorRepository.create(
            {...dto, account: {email: dto.email, password: dto.password, role: Role.Doctor}},
            {include: [Account]}
        );
        return doctor;
    }

    async getById(id: number){
        const doctor = await this.doctorRepository.findByPk(
            id,
            // {include: [Account, Appointment]}
        );
        return doctor;
    }

    async addTimeSlots(id: number, timeSlots: TimeSlotDto[]){
        const doctor = await this.doctorRepository.findByPk(id);
        if (!doctor) {
          throw new Error('Doctor not found');
        }
        return await Promise.all(timeSlots.map(slot => doctor.$create('timeSlot', slot)));
    }
    

    async getAvailableDates(id: number, startDate: Date, endDate: Date){
        const doctor = await this.doctorRepository.findByPk(id, {include: [TimeSlot, Appointment]});
        if (!doctor) {
          throw new Error('Doctor not found');
        }

        let timeSlots = this.getTimesMap(doctor.timeSlots)

        const availableDateTimes = {};

        for (let currentDate = new Date(startDate); currentDate <= endDate; currentDate = addDays(currentDate, 1)) {
            let times = timeSlots[currentDate.getDay()]
            if (!times) {
                continue;
            }
            for (let time of times) {
                let date = addTime(new Date(currentDate), time)
                if (this.isFreeDate(date, doctor.appointments)) {
                    const [day, time] = date.toISOString().split('T');
                    if (!availableDateTimes[day]) {
                        availableDateTimes[day] = [];
                      }
                      availableDateTimes[day].push(time.split('.')[0]);
                }
            }
        }

        return availableDateTimes
    }

    async checkDate(id: number, date:  Date) {
        let doctor = await this.doctorRepository.findByPk(id,{include: [Appointment, TimeSlot]});
        if (!this.isValidDate(date, doctor.timeSlots)) {
            console.log("not valid date")
            return false;
        } 
        if (!this.isFreeDate(date, doctor.appointments)) {
            console.log("not free date")
            return false;
        }
        return true
    }

    isValidDate(date: Date, timeSlots: TimeSlot[]): boolean {
        console.log(date)
        let times = this.getTimesMap(timeSlots)[date.getDay()]
        console.log(times)
        if (!times) {
            return false
        }

        let d = date.getHours() * 60 * 60 * 1000 + date.getMinutes() * 60 * 1000 + date.getSeconds() * 1000 + date.getMilliseconds()

        for (let time of times) {
            if (d === time) {
                return true
            }
        }
        return false
    }

    isFreeDate(date: Date, appointments: Appointment[]): boolean {
        for (let appointment of appointments) {
            if (appointment.date.getTime() === date.getTime()) {
                return false;
            }
        }
        return true
    }

    getTimesMap(timeSlots: TimeSlot[]) {
        return timeSlots.reduce((acc, { weekday, hour, minute }) => {
            const time = hour * 60 * 60 * 1000 + minute * 60 * 1000;
            if (acc[weekday]) {
                acc[weekday].push(time);
            } else {
                acc[weekday] = [time];
            }
            return acc;
        }, {});
    }

    async getAllDoctors(){
        const doctors = await this.doctorRepository.findAll({include: TimeSlot});
        return doctors;
    }
}

  function addTime(date: Date, time: number):Date {
    date.setTime(date.getTime() + time);
    return date;
  }

  function addDays(date: Date, days: number):Date {
    date.setDate(date.getDate() + days)
    return date;
  }