import { NextFunction, Request, Response } from 'express';

export interface IUserController {
	login: (req: Request, res: Response, next: NextFunction) => Promise<void>;

	admin: (req: Request, res: Response, next: NextFunction) => Promise<void>;

	users: (req: Request, res: Response) => void;
}
