import { Module } from '@nestjs/common';
import { TimeSlot } from './timeSlots.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [],
  providers: [],
  imports: [
    SequelizeModule.forFeature([TimeSlot])
  ],
  exports: []
})
export class TimeSlotsModule {}
