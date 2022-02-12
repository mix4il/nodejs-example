import { UserModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { IPrismaService } from '../database/prismaService.interface.service';
import { TYPES } from '../types';
import { User } from './users.entity';
import { IUsersRepository } from './users.interface.repository';
import "reflect-metadata";

@injectable()
export class UsersRepository implements IUsersRepository{

    constructor(@inject(TYPES.IPrismaService) private prismaService: IPrismaService){};

    async create({email, password, name}: User) : Promise<UserModel>{
        return await this.prismaService.clientPrisma.userModel.create({ 
            data: {email, password, name}
        });
    };

    async find(email: string) : Promise<UserModel | null> {
        return await this.prismaService.clientPrisma.userModel.findFirst({
            where: {email}
        })
    }

}