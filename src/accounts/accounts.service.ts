import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './accounts.model';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class AccountsService {
    constructor(@InjectModel(Account) private accountRepository: typeof Account,
        private roleService: RolesService) {

    }

    async createAccount(dto: CreateAccountDto, r: string){
        const role = await this.roleService.getRoleByValue(r);
        const acc = await this.accountRepository.create(dto);
        await acc.$set('role', [role.id]);
        acc.role = [role]
        return acc;
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
