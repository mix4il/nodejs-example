import { PrismaClient } from '@prisma/client';

export interface IPrismaService {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    get clientPrisma(): PrismaClient;
}