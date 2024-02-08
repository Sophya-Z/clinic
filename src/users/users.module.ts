import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { Account } from 'src/accounts/accounts.model';
import { AccountsService } from 'src/accounts/accounts.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, AccountsService],
  imports: [
    SequelizeModule.forFeature([User]),
    SequelizeModule.forFeature([Account])
  ],
  exports: [UsersService]
})
export class UsersModule {}
