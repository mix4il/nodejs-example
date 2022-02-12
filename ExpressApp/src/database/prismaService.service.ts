import { PrismaClient, UserModel } from '@prisma/client';
import { injectable, inject } from 'inversify';
import { ILogger } from '../logger/logger.interface';
import { TYPES } from '../types';
import { IPrismaService } from './prismaService.interface.service';
import "reflect-metadata";

@injectable()
export class PrismaService implements IPrismaService {
    private _clientPrisma: PrismaClient;

    constructor(@inject(TYPES.ILogger) private logger : ILogger){
        this._clientPrisma = new PrismaClient();
    }

    get clientPrisma(): PrismaClient{
        return this._clientPrisma;
    }

    async connect() : Promise<void>{
        try{
            this.clientPrisma.$connect();
            this.logger.log('[PrismaService] Succesful connect!');
        }catch(err){
            this.logger.error('[PrismaService] Error connecting')
        }
    }

    async disconnect(): Promise<void>{
        try{
            this.clientPrisma.$disconnect();
            this.logger.log('[PrismaService] Succesful disconnecting!');
        }catch(err){
            this.logger.error('[PrismaService] Error connecting');
        }
    }
}