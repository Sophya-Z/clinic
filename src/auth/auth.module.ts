import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants';
import { SequelizeModule } from '@nestjs/sequelize';
import { Account } from 'src/accounts/accounts.model';
import { AccountsModule } from 'src/accounts/accounts.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Account]),
    AccountsModule,
    // forwardRef(() => AccountsModule),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}