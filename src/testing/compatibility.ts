import { Prisma, PrismaClient } from '@prisma/client';

import { ArticleListRelationFilter } from '../@generated/article/article-list-relation-filter.input';
import { DateTimeFilter } from '../@generated/prisma/date-time-filter.input';
import { FloatFilter } from '../@generated/prisma/float-filter.input';
import { IntFilter } from '../@generated/prisma/int-filter.input';
import { StringFilter } from '../@generated/prisma/string-filter.input';
import { AggregateUserArgs } from '../@generated/user/aggregate-user.args';
import { FindManyUserArgs } from '../@generated/user/find-many-user.args';
import { GroupByUserArgs } from '../@generated/user/group-by-user.args';
import { UserCreateWithoutArticlesInput } from '../@generated/user/user-create-without-articles.input';
import { UserCreateWithoutCommentsInput } from '../@generated/user/user-create-without-comments.input';
import { UserGroupBy } from '../@generated/user/user-group-by.output';
import { UserListRelationFilter } from '../@generated/user/user-list-relation-filter.input';
import { UserScalarFieldEnum } from '../@generated/user/user-scalar-field.enum';
import { UserWhereInput } from '../@generated/user/user-where.input';

const $prisma = new PrismaClient();

{
    // Scalar filter
    const x: IntFilter = {};
    let p: Prisma.IntFilter = {};
    p = x;
}
{
    // Scalar filter
    const x: DateTimeFilter = {};
    let p: Prisma.DateTimeFilter = {};
    p = x;
}
{
    // Scalar filter
    const x: StringFilter = {};
    let p: Prisma.StringFilter = {};
    p = x;
}
{
    // Nullable filter
    const x: FloatFilter = {};
    let p: Prisma.FloatNullableFilter = {};
    p = x;
}
{
    const x: UserWhereInput = {};
    let p: Prisma.UserWhereInput = {};
    p = x;
    $prisma.user.findMany({ where: x });
}
{
    const x: UserListRelationFilter = {};
    let p: Prisma.UserListRelationFilter = {};
    p = x;
}
{
    const x: FindManyUserArgs = {};
    let p: Prisma.UserFindManyArgs = {};
    p = x;
    $prisma.user.findMany(x);
}
{
    const x: UserCreateWithoutArticlesInput = {
        email: '',
        name: '',
        password: '',
    };
    let p: Prisma.UserCreateWithoutArticlesInput = {
        email: '',
        name: '',
        password: '',
    };
    p = x;
    $prisma.user.create({
        data: x,
    });
}
{
    const x: UserCreateWithoutCommentsInput = {
        email: '',
        name: '',
        password: '',
    };
    let p: Prisma.UserCreateWithoutCommentsInput = {
        email: '',
        name: '',
        password: '',
    };
    p = x;
    $prisma.user.create({
        data: x,
    });
}
{
    const x: AggregateUserArgs = {};
    let p: Prisma.UserAggregateArgs = {};
    p = x;
}
{
    const x: GroupByUserArgs = {
        by: ['id'] as UserScalarFieldEnum[],
    };
    let p: Prisma.UserGroupByArgs = {
        by: ['id'] as UserScalarFieldEnum[],
    };
    p = x;
}
