import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountsService } from 'src/accounts/accounts.service';

@Injectable()
export class AuthService {
  constructor(
    private accountsService: AccountsService,
    private jwtService: JwtService
  ) {}

  async signIn(
    email: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const account = await this.accountsService.findOne(email);
    if (account?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { id: account.id, email: account.email, role: account.role };
    
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}