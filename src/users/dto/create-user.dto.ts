import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'Захарчук', description: 'Фамилия'})
    readonly surname: string;
    @ApiProperty({example: 'Софья', description: 'Имя'})
    readonly name: string;
    @ApiProperty({example: 'Игоревна', description: 'Отчество'})
    readonly patronymic?: string;
    @ApiProperty({example: '12.12.2001', description: 'Дата рождения'})
    readonly birthday: Date;
    @ApiProperty({example: '1234', description: 'Серия паспорта'})
    readonly passportSeries: number;
    @ApiProperty({example: '567890', description: 'Номер паспорта'})
    readonly passportNumber: number;
    @ApiProperty({example: 'Отделом УФМС Росси по Саратовской области', description: 'Паспорт выдан'})
    readonly passportBeenUsed: string;
    @ApiProperty({example: '123', description: 'Код организации'})
    readonly departmentCode: number;
    @ApiProperty({example: '10.10.2020', description: 'Дата выдачи'})
    readonly dateIssue: Date;
    @ApiProperty({example: '123-456-789 12', description: 'СНИЛС'})
    readonly snils: string;
    @ApiProperty({example: '123456789012', description: 'ИНН'})
    readonly inn: number;
    @ApiProperty({example: 'г. Энгельс, ул. Колотилова, д. 155, кв. 82', description: 'Адрес проживания'})
    readonly residentialAddress?: string;
    @ApiProperty({example: '8(912)345-67-89', description: 'Номер телефона'})
    readonly phoneNumber: string;
    @ApiProperty({example: 'sofa_z@mail.ru', description: 'Адрес электронной почты'})
    readonly email: string;
    @ApiProperty({example: 'qwe1234', description: 'Пароль'})
    readonly password: string;
}