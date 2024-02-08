// import { Body, Controller, Get, Post } from '@nestjs/common';

// @Controller('users')
// export class UsersController {

//     constructor(private usersService: UsersService){}
//     @Post()
//     create(@Body() userDto: CreateUserDto){
//         return this.usersService.createUser(userDto);
//     }
//     @Post()
//     create(@Body() timeSlotDto: CreateTimeSlotDto){
//         return this.timeSlotService.CreateTimeSlot(timeSlotDto);
//     }

//     @Get()
//     getAll(){
//         return this.timeSlotsService.getAllDoctorTimeSlots({include});
//     }
// }
