import { LoggerService } from '../logger/logger.service';
import { IExceptionFilter } from './exception.flter.interface';
import { NextFunction, Request, Response } from 'express';
import { HTTPError } from './http-error';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import 'reflect-metadata';

@injectable()
export class ExceptionFilter implements IExceptionFilter {
	constructor(@inject(TYPES.ILogger) private logger: LoggerService) {
	}

	catch(error: Error | HTTPError, req: Request, res: Response, next: NextFunction): void {
		if (error instanceof HTTPError) {
			this.logger.error(`[${error.context}] Error code: ${error.statusCode} - ${error.message}`);
			res.status(error.statusCode).send({ error: error.message });
		} else {
			this.logger.error(error.message);
			res.status(500).send({ error: error.message });
		}
	}
}
