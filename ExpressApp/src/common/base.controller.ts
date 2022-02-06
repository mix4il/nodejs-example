import { Router, Response } from 'express';
import { RouteController } from './route.interface';
import { injectable } from 'inversify';
import { ILogger } from '../logger/logger.interface';
import 'reflect-metadata';

@injectable()
export abstract class BaseController {
	private readonly _router: Router;

	constructor(private logger: ILogger) {
		this._router = Router();
	}

	get router(): Router {
		return this._router;
	}

	public send<T>(res: Response, code: number, message: T): Response {
		res.type('application/json');
		return res.status(code).json(message);
	}

	public ok<T>(res: Response, message: T): Response {
		return this.send<T>(res, 200, message);
	}

	public error<T>(res: Response, message: T): Response {
		return this.send<T>(res, 404, message);
	}

	public create(res: Response): Response {
		return res.sendStatus(201);
	}

	public bindRoutes(routes: RouteController[]): void {
		for (const route of routes) {
			this.logger.log(`Привязывание ${route.method} роута к пути ${route.path}`);
			const handler = route.func.bind(this);
			this._router[route.method](route.path, handler);
		}
	}
}
