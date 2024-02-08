import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountsService } from 'src/accounts/accounts.service';

@Injectable()
export class AuthService {
  constructor(
    private accountsService: AccountsService,
    // private doctorsService: DoctorsService,
    // private adminsService: AdminsService,
    private jwtService: JwtService
  ) {}

  async signIn(
    email: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    console.log(email, pass);
    const user = await this.accountsService.findOne(email);
    console.log(email, pass);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { id: user.id, email: user.email };
    console.log(email, pass);
    
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}