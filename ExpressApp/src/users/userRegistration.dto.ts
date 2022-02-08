import {IsString, IsEmail } from 'class-validator';


export class RegistrationDto{
    @IsEmail()
    email!:string;

    @IsString()
    password!:string;

    @IsString()
    name!:string;
}