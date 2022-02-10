import { BaseController } from '../common/base.controller';
import { LoggerService } from '../logger/logger.service';
import { NextFunction, Request, Response } from 'express';
import { HTTPError } from '../errors/http-error';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { ILogger } from '../logger/logger.interface';
import { IUserController } from './users.interface.controller';
import { LoginDto } from './userLogin.dto';
import { RegistrationDto } from './userRegistration.dto';
import { IUserService } from './user.service.interface';
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
			{ path: '/login', method: 'post', func: this.login },
			{ path: '/admin', method: 'post', func: this.admin,
			middlewares : [new ValidateMiddleware(RegistrationDto)]},
			{ path: '/', method: 'get', func: this.users },
		]);
	}


	login({body}: Request<{}, {}, LoginDto>, res: Response, next: NextFunction): void {
		console.log(body);
		next(new HTTPError(404, 'Страница не найдена'));
	}

	async admin({body}: Request<{}, {}, RegistrationDto>, res: Response, next: NextFunction): Promise<void> {
		const result = await this.userService.createUser(body);
		if(result){
			this.ok(res, result);
			this.loggerService.log(result);
		}else{
			next(new HTTPError(404, 'Ошибка добавления'));
		}
	}

	users(req: Request, res: Response): void {
		this.ok(res, 'users');
	}
}
