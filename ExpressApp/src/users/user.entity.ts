import {hash} from "bcryptjs";

export class User {
    private _password!: string;

    constructor(private readonly _email: string, private readonly _name: string){
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

    public async setPassword(password:string) :Promise<void>{
        this._password = await hash(password, 10);
    }
}