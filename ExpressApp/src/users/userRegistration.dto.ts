import {IsString, IsEmail } from 'class-validator';


export class RegistrationDto{
    @IsEmail({}, {message : 'Неверно укаазан email'})
    email!:string;

    @IsString({message : 'Неверно укаазан пароль'})
    password!:string;

    @IsString({message : 'Неверно указано имя'})
    name!:string;
}