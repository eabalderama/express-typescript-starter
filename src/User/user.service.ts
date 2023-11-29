import { PrismaClient } from '@prisma/client';
import { CreateuserDto, User } from './user.schema';

const prisma = new PrismaClient();

export const createUser = async (payload: CreateuserDto): Promise<User> => {
    return await prisma.user.create({ data: payload });
};
