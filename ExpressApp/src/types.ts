import { UserController } from './users/users.controller';

export const TYPES = {
	Application: Symbol.for('App'),
	ILogger: Symbol.for('ILogger'),
	IExceptionFilter: Symbol.for('IExceptionFilter'),
	IUserService: Symbol.for('IUserService'),
	IUserController: Symbol.for('IUserController'),
};
