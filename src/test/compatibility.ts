/* eslint-disable prefer-const, unicorn/no-null */
import { Prisma, PrismaClient } from '@prisma/client';
import * as P from '@prisma/client';

import { Dummy } from '../../@generated/dummy/dummy.model';
import { DummyCreateInput } from '../../@generated/dummy/dummy-create.input';
import { DateTimeFilter } from '../../@generated/prisma/date-time-filter.input';
import { DecimalNullableFilter } from '../../@generated/prisma/decimal-nullable-filter.input';
import { IntFilter } from '../../@generated/prisma/int-filter.input';
import { StringFilter } from '../../@generated/prisma/string-filter.input';
import { FindManyUserArgs } from '../../@generated/user/find-many-user.args';
import { User } from '../../@generated/user/user.model';
import { UserAggregateArgs } from '../../@generated/user/user-aggregate.args';
import { UserCount } from '../../@generated/user/user-count.output';
import { UserCreateInput } from '../../@generated/user/user-create.input';
import { UserCreateWithoutArticlesInput } from '../../@generated/user/user-create-without-articles.input';
import { UserCreateWithoutCommentsInput } from '../../@generated/user/user-create-without-comments.input';
import { UserGroupByArgs } from '../../@generated/user/user-group-by.args';
import { UserListRelationFilter } from '../../@generated/user/user-list-relation-filter.input';
import { UserMaxOrderByAggregateInput } from '../../@generated/user/user-max-order-by-aggregate.input';
import { UserScalarFieldEnum } from '../../@generated/user/user-scalar-field.enum';
import { UserWhereInput } from '../../@generated/user/user-where.input';

let $prisma = new PrismaClient();

{
  let p: P.User = {} as unknown as P.User;
  let o: User = {} as unknown as User;
  o = p;
  p = o;
}
{
  let t: Array<Date> | Array<string> = [];
  let m: Array<Date | string> = t; // t => m will fail
  m;
}
{
  // Scalar filter
  let x: IntFilter = {};
  let p: Prisma.IntFilter = {};
  p = x;
  p; // x = p fail (enumerable)
}
{
  // Scalar filter
  let x: DateTimeFilter = {};
  let p: Prisma.DateTimeFilter = {};
  p = x;
  p;
}
{
  // Scalar filter
  let x: StringFilter = {};
  let p: Prisma.StringFilter = {};
  p = x;
  p;
}
{
  // Nullable filter
  let x: DecimalNullableFilter = {};
  let p: Prisma.DecimalNullableFilter = {};
  p = x;
  p;
}
{
  let x: UserWhereInput = {};
  let p: Prisma.UserWhereInput = {};
  p = x;
  p;
  $prisma.user.findMany({ where: x });
}
{
  let x: UserListRelationFilter = {};
  let p: Prisma.UserListRelationFilter = {};
  p = x;
  p;
}
{
  let x: FindManyUserArgs = {};
  let p: Prisma.UserFindManyArgs = {};
  p = x;
  p;
  $prisma.user.findMany(x);
}
{
  let x: UserCreateWithoutArticlesInput =
    {} as unknown as UserCreateWithoutArticlesInput;
  let p: Prisma.UserCreateWithoutArticlesInput =
    {} as unknown as Prisma.UserCreateWithoutArticlesInput;
  p = x;
  p;
  $prisma.user.create({
    data: x,
  });
}
{
  let x: UserCreateWithoutCommentsInput =
    {} as unknown as UserCreateWithoutCommentsInput;
  let p: Prisma.UserCreateWithoutCommentsInput =
    {} as unknown as Prisma.UserCreateWithoutCommentsInput;
  p = x;
  p;
  $prisma.user.create({
    data: x,
  });
}
{
  let x: UserAggregateArgs = {};
  let p: Prisma.UserAggregateArgs = {};
  p = x;
  p;
  x;
}
{
  let x: UserGroupByArgs = {
    by: ['id'] as UserScalarFieldEnum[],
  };
  let p: Prisma.UserGroupByArgs = {
    by: ['id'] as UserScalarFieldEnum[],
  };
  p = x;
  p;
  x;
}
{
  let x: DummyCreateInput = { id: '1' };
  let p: Prisma.DummyCreateInput = { id: '2' };
  p = x;
  p;
  x;
}
{
  let x: DummyCreateInput['json'] = {};
  let p: Prisma.DummyCreateInput['json'] = {};
  p = x;
  p;
}
{
  let x: UserMaxOrderByAggregateInput = {};
  let p: Prisma.UserMaxOrderByAggregateInput = {};
  p = x; // To prisma
  x = p; // To object type
}
{
  let x: UserCreateInput = {} as unknown as UserCreateInput;
  let p: Prisma.UserCreateInput = {} as unknown as Prisma.UserCreateInput;
  p = x;
  p;
}
{
  let x: Dummy = {} as unknown as Dummy;
  let p: P.Dummy = {} as unknown as P.Dummy;
  p = x;
  x = p;
}
{
  let x: UserGroupByArgs = {
    by: [UserScalarFieldEnum.id],
  };
  let p: Prisma.UserGroupByArgs = {
    by: [UserScalarFieldEnum.id],
  };
  p = x;
  p;
  // x = p; // fails (enumerable)
  // $prisma.user.groupBy(x); // Error (prisma issue https://github.com/unlight/prisma-nestjs-graphql/issues/31)
  // $prisma.user.groupBy(p); // Error
}
{
  void $prisma.user
    .findMany({
      include: {
        articles: true,
        profile: true,
        _count: true,
        comments: true,
        favoriteArticles: true,
        followers: true,
        following: true,
      },
    })
    .then(users => {
      let result: User[] = users;
      console.log('result', result);
    });

  void $prisma.user
    .findMany({
      include: {
        _count: {
          select: {
            comments: true,
          },
        },
      },
    })
    .then(users => {
      type x = UserCount;
      let result: User[] = users;
      console.log('result', result);
    });
}
