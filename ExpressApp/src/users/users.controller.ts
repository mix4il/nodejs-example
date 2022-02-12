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

@injectable()
export class UserController extends BaseController implements IUserController {
	constructor(
		@inject(TYPES.ILogger) private loggerService: ILogger,
		@inject(TYPES.IUserService) private userService: IUserService
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
		if(validate){
			res.status(200).send({message: 'Авторизация прошла успешно!'});
		}
		next(new HTTPError(404, 'Ошибка авторизации'));
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

	users(req: Request, res: Response): void {
		this.ok(res, 'users');
	}
}
