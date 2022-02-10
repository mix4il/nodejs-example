import express, { Express, Router } from 'express';
import { Server } from 'http';
import { UserController } from './users/users.controller';
import { ILogger } from './logger/logger.interface';
import { injectable, inject } from 'inversify';
import { TYPES } from './types';
import { IExceptionFilter } from './errors/exception.flter.interface';
import 'reflect-metadata';
import { IUserController } from './users/users.interface.controller';
import {json} from 'body-parser';
import { IConfigService } from './config/config.interface.service';

@injectable()
export class App {
	private app: Express;
	private port: number;
	private server!: Server;

	constructor(
		@inject(TYPES.ILogger) private logger: ILogger,
		@inject(TYPES.IUserController) private userController: UserController,
		@inject(TYPES.IExceptionFilter) private exceptionFilter: IExceptionFilter,
		@inject(TYPES.IConfigService) private configService: IConfigService,
	) {
		this.app = express();
		this.port = Number(this.configService.get('PORT'));
	}

	private useMiddleware(){
		this.app.use(json())
	}

	private useRouter() {
		this.app.use('/users', this.userController.router);
	}

	private useExceptionFilter() {
		this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter));
	}

	private listenServer() {
		this.server = this.app.listen(this.port);
	}

	public async init(): Promise<void> {
		this.useMiddleware();
		this.useRouter();
		this.useExceptionFilter();
		this.listenServer();
		this.logger.log(`Сервер запущен на ${this.port} порту`);
	}
}
