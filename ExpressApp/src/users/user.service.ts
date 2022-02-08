import { User } from './user.entity';
import { IUserService } from './user.service.interface';
import {injectable} from 'inversify';
import 'reflect-metadata';
import { LoginDto } from './userLogin.dto';
import { RegistrationDto } from './userRegistration.dto';

@injectable()
export class UserService implements IUserService {
    validateUser({email, password}: LoginDto) : boolean {
        return true;
    }

    async createUser({email, name, password} : RegistrationDto) : Promise<User | null> {
        const newUser = new User(email, name);
        await newUser.setPassword(password);
        return newUser;
    }
}