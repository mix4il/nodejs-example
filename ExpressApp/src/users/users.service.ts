import { User } from './users.entity';
import { IUserService } from './users.service.interface';
import {inject, injectable} from 'inversify';
import 'reflect-metadata';
import { LoginDto } from './usersLogin.dto';
import { RegistrationDto } from './usersRegistration.dto';
import { TYPES } from '../types';
import { IConfigService } from '../config/config.interface.service';
import { IUsersRepository } from './users.interface.repository';
import { UserModel } from '@prisma/client';

@injectable()
export class UserService implements IUserService {

    constructor(
        @inject(TYPES.IConfigService) private configService : IConfigService,
        @inject(TYPES.IUsersRepository) private userRepository : IUsersRepository){}

    async validateUser({email, password}: LoginDto) : Promise<boolean> {
        const result = await this.userRepository.find(email);
        if(!result){
            return false;
        }
        const userCheck = new User(result.email,result.name, result.password);
        return await userCheck.compare(password);

    }

    async createUser({email, name, password} : RegistrationDto) : Promise<UserModel | null> {
        const existUser = await this.userRepository.find(email);
        if(existUser){
            return null;
        }
        const newUser = new User(email, name);
        const salt = this.configService.get('SALT');
        await newUser.setPassword(password, Number(salt));
        return await this.userRepository.create(newUser);
    }
}