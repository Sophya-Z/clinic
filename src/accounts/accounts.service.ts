import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './accounts.model';
@Injectable()
export class AccountsService {
    constructor(@InjectModel(Account) private accountRepository: typeof Account) {

    }

    async getAllAccounts(){
        const accs = await this.accountRepository.findAll({include: {all: true}});
        return accs;
    }

    async findOne(email: string){
        const user = await this.accountRepository.findOne(
            {where:
                {email: email}
            }
        );
        return user;
    }
}
