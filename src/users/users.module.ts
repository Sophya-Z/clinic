import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { Account } from 'src/accounts/accounts.model';
import { AccountsService } from 'src/accounts/accounts.service';
import { RoleModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService, AccountsService],
  imports: [
    SequelizeModule.forFeature([User]),
    SequelizeModule.forFeature([Account]),
    RoleModule
  ],
  exports: [UsersService, 
    // forwardRef(() => AuthModule)
  ]
})
export class UsersModule {}
