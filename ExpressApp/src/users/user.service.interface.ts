import { User } from './user.entity';
import { LoginDto } from './userLogin.dto';
import { RegistrationDto } from './userRegistration.dto';


export interface IUserService{
    createUser:(dto: RegistrationDto)=> Promise<User | null>;
    validateUser:(dto: LoginDto) => boolean;
}