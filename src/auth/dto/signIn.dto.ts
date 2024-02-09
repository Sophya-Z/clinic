import { ApiProperty } from "@nestjs/swagger";

export class SignInDto {
    @ApiProperty({example: 'doctor@mail.ru', description: 'Адрес электронной почты'})
    readonly email: string;
    @ApiProperty({example: '09021990', description: 'Пароль'})
    readonly password: string;
}