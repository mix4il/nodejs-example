import { User } from './user.entity';
import { IUserService } from './user.service.interface';
import {inject, injectable} from 'inversify';
import 'reflect-metadata';
import { LoginDto } from './userLogin.dto';
import { RegistrationDto } from './userRegistration.dto';
import { TYPES } from '../types';
import { IConfigService } from '../config/config.interface.service';

@injectable()
export class UserService implements IUserService {

    constructor(@inject(TYPES.IConfigService) private configService : IConfigService){}

    validateUser({email, password}: LoginDto) : boolean {
        return true;
    }

    async createUser({email, name, password} : RegistrationDto) : Promise<User | null> {
        const newUser = new User(email, name);
        const salt = this.configService.get('SALT');
        await newUser.setPassword(password, Number(salt));
        return newUser;
    }
}