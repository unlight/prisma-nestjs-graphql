import { PrismaClient, UserWhereInput as PrismaUserWhereInput } from '@prisma/client';
import { UserWhereInput } from '../@generated/user/user-where.input';

const prisma = new PrismaClient();

const userfindManyWhere: UserWhereInput = {};
prisma.user.findMany({ where: userfindManyWhere });
