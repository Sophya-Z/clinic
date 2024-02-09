import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { DoctorsModule } from './doctors/doctors.module';
import { Doctor } from "./doctors/doctors.model";
import { AppointmentsModule } from './appointments/appointments.module';
import { AuthModule } from "./auth/auth.module";
import { TimeSlotsModule } from "./timeSlots/timeSlots.module";
import { TimeSlot } from "./timeSlots/timeSlots.model";
import { Appointment } from "./appointments/appointments.model";
import { AdminsModule } from './admins/admins.module';
import { AccountsService } from './accounts/accounts.service';
import { SignUpController } from './sign-up/sign-up.controller';
import { SignUpService } from './sign-up/sign-up.service';
import { SignUpModule } from './sign-up/sign-up.module';
import { Account } from "./accounts/accounts.model";
import { AccountsModule } from "./accounts/accounts.module";


@Module({
    controllers: [SignUpController],
    providers: [SignUpService],
    imports: [
      AccountsModule,
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        models: [Account, User, Doctor, Appointment, TimeSlot],
        autoLoadModels: true
      }),
      UsersModule,
      DoctorsModule,
      AppointmentsModule,
      AuthModule,
      TimeSlotsModule,
      AdminsModule,
      SignUpModule
    ]
})
export class AppModule{}