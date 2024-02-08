import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants';
import { UsersService } from 'src/users/users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { Admin } from 'src/admins/admins.model';
import { Doctor } from 'src/doctors/doctors.model';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Doctor, Admin]),
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [AuthService, UsersService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}