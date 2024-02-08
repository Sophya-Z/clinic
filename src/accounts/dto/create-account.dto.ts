import { ApiProperty } from "@nestjs/swagger";

export class CreateAccountDto {
    constructor(id: number, email: string, password: string, role: string){}
    @ApiProperty({example: '1', description: 'Id'})
    readonly id: number;
    @ApiProperty({example: 'doctor@mail.ru', description: 'Адрес электронной почты'})
    readonly email: string;
    @ApiProperty({example: '09021990', description: 'Пароль'})
    readonly password: string;
    @ApiProperty({example: 'Administrator', description: 'Роль пользователя'})
    readonly role: string;
}