import { BaseController } from '../common/base.controller';
import { LoggerService } from '../logger/logger.service';
import { NextFunction, Request, Response } from 'express';
import { HTTPError } from '../errors/http-error';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { ILogger } from '../logger/logger.interface';
import 'reflect-metadata';
import { IUserController } from './users.interface.controller';

@injectable()
export class UserController extends BaseController implements IUserController {
	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService);
		this.bindRoutes([
			{ path: '/login', method: 'get', func: this.login },
			{ path: '/admin', method: 'get', func: this.admin },
			{ path: '/', method: 'get', func: this.users },
		]);
	}

	login(req: Request, res: Response, next: NextFunction): void {
		next(new HTTPError(404, 'Страница не найдена'));
	}

	admin(req: Request, res: Response): void {
		this.ok(res, 'admin');
	}

	users(req: Request, res: Response): void {
		this.ok(res, 'users');
	}
}
