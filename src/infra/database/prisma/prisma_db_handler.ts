import { DBHandler } from './../interfaces/db_handler';
import { PrismaClient } from "@prisma/client";
import { prismaClient } from './prisma_client';

export class PrismaDBHandler implements DBHandler {
    private prismaClient: PrismaClient = prismaClient()

    public async create(model: keyof PrismaClient, args: any): Promise<object> {
        const method = eval(`this.prismaClient.${model}.create`)
        return method({
            data: args,
        })
    }
}