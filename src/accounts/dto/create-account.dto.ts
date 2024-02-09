import { ApiProperty } from "@nestjs/swagger";

export class CreateAccountDto {
    @ApiProperty({example: '1', description: 'Id'})
    readonly id: number;
    @ApiProperty({example: 'doctor@mail.ru', description: 'Адрес электронной почты'})
    readonly email: string;
    @ApiProperty({example: '09021990', description: 'Пароль'})
    readonly password: string;
    constructor(id: number, email: string, password: string){
        this.id = id;
        this.email = email;
        this.password = password;
    }
}