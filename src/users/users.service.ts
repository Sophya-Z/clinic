import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { AccountsService } from 'src/accounts/accounts.service';
import { CreateAccountDto } from 'src/accounts/dto/create-account.dto';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User) {

    }
    private accountService: AccountsService;

    async createUser(dto: CreateUserDto){
        const user = await this.userRepository.create(dto);
        const newAccount = await this.accountService.createAccount({id: user.id, email: dto.email, password: dto.password, role: 'User'} as CreateAccountDto);
        return user;
    }

    async getAllUsers(){
        const users = await this.userRepository.findAll();
        return users;
    }

    async findOne(email: string){
        const user = await this.userRepository.findOne(
            {where:
                {email: email}
            }
        );
        return user;
    }
}
