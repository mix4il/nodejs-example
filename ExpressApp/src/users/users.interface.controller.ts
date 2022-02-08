import { NextFunction, Request, Response } from 'express';

export interface IUserController {
	login: (req: Request, res: Response, next: NextFunction) => void;

	admin: (req: Request, res: Response, next: NextFunction) => void;

	users: (req: Request, res: Response) => void;
}
