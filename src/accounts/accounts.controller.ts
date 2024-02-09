import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateAccountDto } from './dto/create-account.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('accounts')
export class AccountsController {
    constructor(private accountsService: AccountsService){}

    // @ApiOperation({summary: 'Создание акккаунта'})
    // @ApiResponse({status: 200, type: Account})
    @Post()
    createAcc(@Body() accountDto: CreateAccountDto, role: string){
        return this.accountsService.createAccount(accountDto, role);
    }

    // @ApiOperation({summary: 'Получение всех пользователей'})
    // @ApiResponse({status: 200, type: [Account]})
    @UseGuards(AuthGuard)
    @Get()
    getAcc(){
        return this.accountsService.getAllAccounts();
    }
}