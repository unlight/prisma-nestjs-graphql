import { PrismaClient } from '@prisma/client';
import * as prisma from '@prisma/client';

import { ArticleFilter } from '../@generated/article/article-filter.input';
import { ArticleRelationFilter } from '../@generated/article/article-relation-filter.input';
import { ArticleWhereInput } from '../@generated/article/article-where.input';
import { DateTimeFilter } from '../@generated/prisma/date-time-filter.input';
import { TagFilter } from '../@generated/tag/tag-filter.input';
import { TagWhereInput } from '../@generated/tag/tag-where.input';
import { UserFilter } from '../@generated/user/user-filter.input';
import { UserWhereInput } from '../@generated/user/user-where.input';
import { User } from '../@generated/user/user.model';

const $prisma = new PrismaClient();

{
    const p: prisma.DateTimeFilter = {};
    const n: DateTimeFilter = p;
}
{
    const p: prisma.UserFilter = {};
    const n: UserFilter = p;
}
{
    const p: prisma.TagWhereInput = {};
    const n: TagWhereInput = p;
}
{
    const p: prisma.UserWhereInput = {};
    const n: UserWhereInput = p;
}
{
    const p: prisma.TagFilter = {};
    const n: TagFilter = p;
}
{
    const p: prisma.ArticleFilter = {};
    const n: ArticleFilter = p;
}
{
    const p: prisma.ArticleWhereInput = {};
    const n: ArticleWhereInput = p;
}
{
    const userfindManyWhere: UserWhereInput = {};
    $prisma.user.findMany({ where: userfindManyWhere });
}

// const articleRelationFilter: ArticleRelationFilter = { is: { id: { equals: '1' } } };
// $prisma.comment.findMany({ where: { article: articleRelationFilter } });

// let userModel: prisma.User = (null as unknown) as prisma.User;
// let userObjectType: User = (null as unknown) as User;
// userObjectType = userModel;
// userModel = userObjectType;
