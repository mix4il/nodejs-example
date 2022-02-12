import { UserModel } from '@prisma/client';
import { LoginDto } from './usersLogin.dto';
import { RegistrationDto } from './usersRegistration.dto';


export interface IUserService{
    createUser:(dto: RegistrationDto)=> Promise<UserModel | null>;
    validateUser:(dto: LoginDto) => Promise<boolean>;
}