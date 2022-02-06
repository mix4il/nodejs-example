import { UserController } from './users/users.controller';

export const TYPES = {
	Application: Symbol.for('App'),
	ILogger: Symbol.for('ILogger'),
	IExceptionFilter: Symbol.for('IExceptionFilter'),
	IUserController: Symbol.for('IUserController'),
};
