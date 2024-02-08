import { Body, Controller, Get, Post } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateAccountDto } from './dto/create-account.dto';

@Controller('accounts')
export class AccountsController {
    constructor(private accountsService: AccountsService){}

    // @ApiOperation({summary: 'Создание акккаунта'})
    // @ApiResponse({status: 200, type: Account})
    @Post()
    createAcc(@Body() accountDto: CreateAccountDto){
        return this.accountsService.createAccount(accountDto);
    }

    // @ApiOperation({summary: 'Получение всех пользователей'})
    // @ApiResponse({status: 200, type: [Account]})
    @Get()
    getAcc(){
        return this.accountsService.getAccount();
    }
}