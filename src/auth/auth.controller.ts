import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards
  } from '@nestjs/common';
  import { AuthGuard } from './auth.guard';
  import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/users/users.model';
import { SignInDto } from './dto/signIn.dto';
import { AccountsService } from 'src/accounts/accounts.service';
import { Account } from 'src/accounts/accounts.model';
  
  @ApiTags('Аутентификация')
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService, private accountsService: AccountsService) {}
  
    @ApiOperation({summary: 'Вход в учётную запись'})
    // @ApiResponse({status: 200, type: User})
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: SignInDto) {
      return this.authService.signIn(signInDto.email, signInDto.password);
    }
  
    @ApiOperation({summary: 'Подтверждение учётной записи'})
    @ApiResponse({status: 200, type: Account})
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return this.accountsService.findById(req.user.id);
    }
  }