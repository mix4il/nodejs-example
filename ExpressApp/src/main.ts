import { Container, ContainerModule, interfaces } from 'inversify';
import { IPrismaService } from './database/prismaService.interface.service';
import { PrismaService } from './database/prismaService.service';
import { App } from './app';
import { IConfigService } from './config/config.interface.service';
import { ConfigService } from './config/config.service';
import { ExceptionFilter } from './errors/exception.flter';
import { IExceptionFilter } from './errors/exception.flter.interface';
import { ILogger } from './logger/logger.interface';
import { LoggerService } from './logger/logger.service';
import { TYPES } from './types';
import { UserService } from './users/users.service';
import { IUserService } from './users/users.service.interface';
import { UserController } from './users/users.controller';
import { IUserController } from './users/users.interface.controller';
import { IUsersRepository } from './users/users.interface.repository';
import { UsersRepository } from './users/users.repository';

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<App>(TYPES.Application).to(App);
	bind<ILogger>(TYPES.ILogger).to(LoggerService).inSingletonScope;
	bind<IExceptionFilter>(TYPES.IExceptionFilter).to(ExceptionFilter);
	bind<IUserController>(TYPES.IUserController).to(UserController);
	bind<IUserService>(TYPES.IUserService).to(UserService);
	bind<IConfigService>(TYPES.IConfigService).to(ConfigService).inSingletonScope;
	bind<IPrismaService>(TYPES.IPrismaService).to(PrismaService).inSingletonScope;
	bind<IUsersRepository>(TYPES.IUsersRepository).to(UsersRepository);
});

function bootstrap() {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.Application);
	app.init();
	return { app, appContainer };
}

export const { app, appContainer } = bootstrap();
