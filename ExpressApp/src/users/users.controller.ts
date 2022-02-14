import { BaseController } from '../common/base.controller';
import { NextFunction, Request, Response } from 'express';
import { HTTPError } from '../errors/http-error';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { ILogger } from '../logger/logger.interface';
import { IUserController } from './users.interface.controller';
import { LoginDto } from './usersLogin.dto';
import { RegistrationDto } from './usersRegistration.dto';
import { IUserService } from './users.service.interface';
import 'reflect-metadata';
import { ValidateMiddleware } from '../common/validate.middleware';
import { sign } from 'jsonwebtoken';
import { IConfigService } from '../config/config.interface.service';

@injectable()
export class UserController extends BaseController implements IUserController {
	constructor(
		@inject(TYPES.ILogger) private loggerService: ILogger,
		@inject(TYPES.IUserService) private userService: IUserService,
		@inject(TYPES.IConfigService) private configService: IConfigService
		) {
		super(loggerService);
		this.bindRoutes([
			{ path: '/login', method: 'post', func: this.login,
			middlewares : [new ValidateMiddleware(LoginDto)] },
			{ path: '/admin', method: 'post', func: this.admin,
			middlewares : [new ValidateMiddleware(RegistrationDto)]},
			{ path: '/', method: 'get', func: this.users},
		]);
	}


	async login({body}: Request<{}, {}, LoginDto>, res: Response, next: NextFunction): Promise<void> {
		const validate = await this.userService.validateUser(body);
		const jwt = await this.signJWT(body.email, this.configService.get('SECRET'));
		if(validate){
			this.ok(res, {jwt});
		}else {
			next(new HTTPError(404, 'Ошибка авторизации'));
		}
	}

	async admin({body}: Request<{}, {}, RegistrationDto>, res: Response, next: NextFunction): Promise<void> {
		const result = await this.userService.createUser(body);
		if(result){
			this.ok(res, {email: result.email, id: result.id});
			this.loggerService.log(result);
		}else{
			next(new HTTPError(404, 'Ошибка добавления'));
		}
	}

	async signJWT(email: string, secretdv:string): Promise<string> {
		console.log(secretdv, '   ', email);
		let secret = [
			'-----BEGIN PRIVATE KEY-----',
			'MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAkcd7iupXSHhgIRat',
			'b2gnEiyC3AIf7GCrISTtgM5Lb8kccGjunU8sIqwwd3BV6qD+pExeyvMyU085RHRX',
			'ud1cyQIDAQABAkAzmni6GPAiwDHPJLbqK+VAwq7j8ICabTHGvsqwANalT/O4V75m',
			'e2ExeqV05+jlzVOGrQ953n8Mx1u0uRgPlfoBAiEAyO3qytGKRRzlqBuGwPFPde4a',
			'66ZW4AmRcBwwuKp1zgkCIQC5u/2j/JFzM4GTbpoC0a2u78+tqYQW7Y/Usu6AAubI',
			'wQIhAMKbhMQJ7UUBNwH6HyryzcZn5pUEl7IIMmAGPb4uA0mZAiAbJPhawQzY00w6',
			'qc1kYBSMHowxiza8yxdcNJJarxHfgQIgcw2oEtn8GbvNMOsFg0Q9TPMdQ+uhxhWK',
			'xhVgWkIkTVU=',
			'-----END PRIVATE KEY-----',
		].join('\n');
		return new Promise<string>((resolve, reject) => {
			sign(
				{
					email,
					iat: Math.floor( Date.now() / 1000)
				}, secret,
				{
					algorithm: 'RS256', 
				}, 
				(err, token) => {
					if(err){
						reject(err);
						console.log('sdvsdv')
					}
					resolve(token as string);
				}
			)
		})
	}

	users(req: Request, res: Response): void {
		this.ok(res, 'users');
	}
}
