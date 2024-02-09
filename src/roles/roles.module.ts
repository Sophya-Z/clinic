import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { Role } from './roles.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { AccountRoles } from './account-roles.model';
import { Account } from 'src/accounts/accounts.model';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [
    SequelizeModule.forFeature([Role, Account, AccountRoles])
  ],
  exports: [
    RolesService
  ]
})
export class RoleModule {}
