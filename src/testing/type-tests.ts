import { PrismaClient } from '@prisma/client';
import * as prisma from '@prisma/client';

import { ArticleListRelationFilter } from '../@generated/article/article-list-relation-filter.input';
import { DateTimeFilter } from '../@generated/prisma/date-time-filter.input';
import { IntFilter } from '../@generated/prisma/int-filter.input';
import { UserListRelationFilter } from '../@generated/user/user-list-relation-filter.input';
import { UserWhereInput } from '../@generated/user/user-where.input';

const $prisma = new PrismaClient();

{
    const n: IntFilter = {};
    const p = n as prisma.IntFilter;
}

{
    const n: DateTimeFilter = {};
    const p = n as prisma.UserWhereInput;
}
{
    // const n: ArticleListRelationFilter = {};
    // const p: prisma.ArticleListRelationFilter = n;
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
//     const p: prisma.ArticleListRelationFilter = {};
//     const n: ArticleListRelationFilter = p;
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
