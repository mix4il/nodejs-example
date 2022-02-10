import { NextFunction, Request, Response} from 'express';
import { IMiddleware } from './IMiddleware.interface';
import {  plainToClass, ClassConstructor, plainToInstance} from 'class-transformer';
import {validate} from 'class-validator';
import 'reflect-metadata';


export class ValidateMiddleware implements IMiddleware {

    constructor(private classToValidate: ClassConstructor<object>) {
    }

	execute({ body }: Request, res: Response, next: NextFunction): void {
        const instance = plainToClass(this.classToValidate, body);
        validate(instance).then(error => {
            if(error.length > 0){
                res.status(422).send({ message : error});
            }else{
                next();
            }
        });

	}
}