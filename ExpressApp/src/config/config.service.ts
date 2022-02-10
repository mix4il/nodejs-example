import {config, DotenvConfigOutput, DotenvParseOutput} from 'dotenv'
import { inject, injectable } from 'inversify';
import { ILogger } from '../logger/logger.interface';
import { TYPES } from '../types';
import { IConfigService } from './config.interface.service';

@injectable()
export class ConfigService implements IConfigService {
    private configuration!: DotenvParseOutput;
    constructor(@inject(TYPES.ILogger) private loggerService: ILogger){
        const result: DotenvConfigOutput  = config();
        if(result.error){
            this.loggerService.error('Файла .env не существует или его невозможно прочитать.');
        }else{
            this.configuration = result.parsed as DotenvParseOutput;
        }
    }

    get(key: string) : string {
        return this.configuration[key];
    };
}