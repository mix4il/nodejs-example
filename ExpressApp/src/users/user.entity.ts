import {hash} from "bcryptjs";
import { inject } from 'inversify';
import { IConfigService } from '../config/config.interface.service';
import { TYPES } from '../types';

export class User {
    private _password!: string;

    constructor(private readonly _email: string,
         private readonly _name: string,
         ){
    }

    get password(){
        return this._password;
    }

    get email(){
        return this._email;
    }

    get name(){
        return this._name;
    }

    public async setPassword(password:string, salt:number): Promise<void>{
        this._password = await hash(password, salt);
    }
}