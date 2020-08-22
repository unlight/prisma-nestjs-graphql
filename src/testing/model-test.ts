import { PrismaClient, User as UserModel } from '@prisma/client';
import { User as UserObjectType } from '../@generated/user/user.model';

let userObjectType: UserObjectType = (null as unknown) as UserObjectType;
let userModel: UserModel = (null as unknown) as UserModel;

const userModel2: UserModel = userObjectType;
const userObjectType2: UserObjectType = userModel;
