import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Doctor } from './doctors.model';

@Module({
  providers: [DoctorsService],
  controllers: [DoctorsController],
  imports: [
    SequelizeModule.forFeature([Doctor])
  ],
  exports: [DoctorsService]
})
export class DoctorsModule {}
