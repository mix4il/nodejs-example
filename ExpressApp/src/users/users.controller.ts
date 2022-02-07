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
import {json} from 'body-parser';
import 'reflect-metadata';

@injectable()
export class UserController extends BaseController implements IUserController {
	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService);
		this.bindRoutes([
			{ path: '/login', method: 'post', func: this.login },
			{ path: '/admin', method: 'post', func: this.admin },
			{ path: '/', method: 'get', func: this.users },
		]);
	}

	login(req: Request<{}, {}, LoginDto>, res: Response, next: NextFunction): void {
		console.log(req.body);
		next(new HTTPError(404, 'Страница не найдена'));
	}

	admin(req: Request<{}, {}, RegistrationDto>, res: Response): void {
		console.log(req.body);
		this.ok(res, 'admin');
	}

	users(req: Request, res: Response): void {
		this.ok(res, 'users');
	}
}
