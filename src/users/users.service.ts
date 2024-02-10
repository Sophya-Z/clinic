import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { Account } from 'src/accounts/accounts.model';
import { Role } from 'src/roles/role.enum';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User) {}

    async createUser(dto: CreateUserDto){
        const user = await this.userRepository.create(
            {...dto, account: {email: dto.email, password: dto.password, role: Role.User}},
            {include: [Account]}
        );
        return user;
    }

    async getAllUsers(){
        const users = await this.userRepository.findAll();
        return users;
    }
}
