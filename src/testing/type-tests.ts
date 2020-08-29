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

// {
//     const p1 = prisma.IntFilter;
//     const p2 = prisma.NestedIntFilter;
//     const p3 = prisma.NullableIntFilter;
//     const p4 = prisma.IntNullableFilter;
// }

{
    const n: DateTimeFilter = {};
    const p: prisma.DateTimeFilter = n;
}
{
    // const n: ArticleFilter = {};
    // const p: prisma.ArticleFilter = n;
    // const n: TagWhereInput['articles'] = {};
    // const p: prisma.TagWhereInput['articles'] = n;
    // const n: TagWhereInput['articles'] = {};
    // const p: prisma.TagWhereInput['articles'] = n;
    //    const n: TagWhereInput = {};
    // const p: prisma.TagWhereInput = n;
}
// {
//     const n: UserFilter = {};
//     const p: prisma.UserFilter = n;
// }
// {
//     const p: prisma.UserWhereInput = {};
//     const n: UserWhereInput = p;
// }
// {
//     const p: prisma.TagFilter = {};
//     const n: TagFilter = p;
// }
// {
//     const p: prisma.ArticleFilter = {};
//     const n: ArticleFilter = p;
// }
// {
//     const p: prisma.ArticleWhereInput = {};
//     const n: ArticleWhereInput = p;
// }
// {
//     const n: UserWhereInput['favoriteArticles'] = {};
//     const p: prisma.UserWhereInput['favoriteArticles'] = n;
// }
// {
//     const userfindManyWhere: UserWhereInput = {};
//     $prisma.user.findMany({ where: userfindManyWhere });
// }

// const articleRelationFilter: ArticleRelationFilter = { is: { id: { equals: '1' } } };
// $prisma.comment.findMany({ where: { article: articleRelationFilter } });

// let userModel: prisma.User = (null as unknown) as prisma.User;
// let userObjectType: User = (null as unknown) as User;
// userObjectType = userModel;
// userModel = userObjectType;
