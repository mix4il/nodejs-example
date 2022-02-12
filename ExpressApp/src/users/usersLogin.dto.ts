import {IsString, IsEmail } from 'class-validator';

export class LoginDto{
    @IsEmail({}, {message: 'Невалидный логин'})
    email!:string;

    @IsString({message: 'Невалидный пароль'})
    password!:string;
}