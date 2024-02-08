import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { AccountsService } from 'src/accounts/accounts.service';
import { CreateAccountDto } from 'src/accounts/dto/create-account.dto';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User, private accountService: AccountsService) {
    
    }
    

    async createUser(dto: CreateUserDto){
        const user = await this.userRepository.create(dto);
        const cad = new CreateAccountDto(user.id_user, dto.email, dto.password, 'User');
        const newAccount = await this.accountService.createAccount(cad);
        return user;
    }

    async getAllUsers(){
        const users = await this.userRepository.findAll();
        return users;
    }
}
