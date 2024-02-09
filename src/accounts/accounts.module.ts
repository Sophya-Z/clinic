import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { Account } from './accounts.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from 'src/roles/roles.model';
import { AccountRoles } from 'src/roles/account-roles.model';
import { RoleModule } from 'src/roles/roles.module';

@Module({
  // controllers: [AccountsController],
  providers: [AccountsService],
  imports: [
    SequelizeModule.forFeature([Account, Role, AccountRoles]),
    RoleModule
  ],
  exports: [AccountsService]
})
export class AccountsModule {}
