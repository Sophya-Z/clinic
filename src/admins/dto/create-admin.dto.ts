import { ApiProperty } from "@nestjs/swagger";

export class CreateAdminDto {
    @ApiProperty({example: 'Иванов', description: 'Фамилия'})
    readonly surname: string;
    @ApiProperty({example: 'Иван', description: 'Имя'})
    readonly name: string;
    @ApiProperty({example: 'Иванович', description: 'Отчество'})
    readonly patronymic?: string;
    @ApiProperty({example: '09.02.1990', description: 'Дата рождения'})
    readonly birthday: Date;
    @ApiProperty({example: '8(908)765-54-32', description: 'Номер телефона'})
    readonly phoneNumber: string;
    @ApiProperty({example: 'doctor@mail.ru', description: 'Адрес электронной почты'})
    readonly email: string;
    @ApiProperty({example: '09021990', description: 'Пароль'})
    readonly password: string;
}