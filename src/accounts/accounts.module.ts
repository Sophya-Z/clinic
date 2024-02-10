import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Account } from './accounts.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  // controllers: [AccountsController],
  providers: [AccountsService],
  imports: [
    SequelizeModule.forFeature([Account]),
  ],
  exports: [AccountsService]
})
export class AccountsModule {}
