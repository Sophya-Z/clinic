import { Injectable } from '@nestjs/common';
import { Account } from './accounts.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAccountDto } from './dto/create-account.dto';

@Injectable()
export class AccountsService {
    constructor(@InjectModel(Account) private accountRepository: typeof Account) {

    }

    async createAccount(dto: CreateAccountDto){
        const acc = await this.accountRepository.create(dto);
        return acc;
    }

    async getAccount(){
        const accs = await this.accountRepository.findAll();
        return accs;
    }

    // async findOne(email: string){
    //     const user = await this.accountRepository.findOne(
    //         {where:
    //             {email: email}
    //         }
    //     );
    //     return user;
    // }
}
