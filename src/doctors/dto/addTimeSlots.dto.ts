import { ApiProperty } from "@nestjs/swagger";

export class AddTimeSlotsDto {
    @ApiProperty({example: 1, description: 'Доктор ID'})
    readonly id: number
    @ApiProperty({example: 1, description: 'Доктор ID'})
    readonly timeSlots: TimeSlotDto[]
}

export class TimeSlotDto {
    @ApiProperty({example: 1, description: 'День недели'})
    week_day: number;
    @ApiProperty({example: 1, description: 'Час'})
    hour: number;
    @ApiProperty({example: 1, description: 'Минуты'})
    minute: number;
}