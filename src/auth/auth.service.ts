import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { log } from 'console';
import { DoctorsService } from 'src/doctors/doctors.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    // private doctorsService: DoctorsService,
    // private adminsService: AdminsService,
    private jwtService: JwtService
  ) {}

  async signIn(
    email: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    console.log(email, pass);
    const user = await this.usersService.findOne(email);
    console.log(email, pass);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { id: user.id_user, email: user.email };
    console.log(email, pass);
    
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}