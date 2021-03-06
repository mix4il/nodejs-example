import { NextFunction, Router, Request, Response } from 'express';
import { IMiddleware } from './IMiddleware.interface';

export interface RouteController {
	path: string;
	func: (req: Request, res: Response, next: NextFunction) => void;
	method: keyof Pick<Router, 'get' | 'post' | 'put' | 'delete' | 'patch'>;
	middlewares?: IMiddleware[];
}
