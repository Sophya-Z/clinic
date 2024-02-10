import { ApiProperty } from "@nestjs/swagger";

export class CreateAppointmentDto {
    @ApiProperty({example: '2020-10-10', description: 'Дата посещения'})
    readonly date: string;
    @ApiProperty({example: '1', description: 'Доктор Id'})
    readonly doctorId: number;
    @ApiProperty({example: '1', description: 'Пользователь Id'})
    readonly userId: number;
}