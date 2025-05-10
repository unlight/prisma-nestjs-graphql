/* eslint-disable @typescript-eslint/no-unused-expressions, prefer-const */
import { Field } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';
import * as P from '@prisma/client';

import { Dummy } from '../../@generated/dummy/dummy.model.ts';
import { DummyCreateInput } from '../../@generated/dummy/dummy-create.input.ts';
import { DateTimeFilter } from '../../@generated/prisma/date-time-filter.input.ts';
import { DecimalFilter } from '../../@generated/prisma/decimal-filter.input.ts';
import { IntFilter } from '../../@generated/prisma/int-filter.input.ts';
import { StringFilter } from '../../@generated/prisma/string-filter.input.ts';
import { FindManyUserArgs } from '../../@generated/user/find-many-user.args.ts';
import { User } from '../../@generated/user/user.model.ts';
import { UserAggregateArgs } from '../../@generated/user/user-aggregate.args.ts';
import { UserCount } from '../../@generated/user/user-count.output.ts';
import { UserCreateInput } from '../../@generated/user/user-create.input.ts';
import { UserCreateWithoutArticlesInput } from '../../@generated/user/user-create-without-articles.input.ts';
import { UserCreateWithoutCommentsInput } from '../../@generated/user/user-create-without-comments.input.ts';
import { UserGroupByArgs } from '../../@generated/user/user-group-by.args.ts';
import { UserListRelationFilter } from '../../@generated/user/user-list-relation-filter.input.ts';
import { UserMaxOrderByAggregateInput } from '../../@generated/user/user-max-order-by-aggregate.input.ts';
import { UserScalarFieldEnum } from '../../@generated/user/user-scalar-field.enum.ts';
import { UserWhereInput } from '../../@generated/user/user-where.input.ts';
import { UserWhereUniqueInput } from '../../@generated/user/user-where-unique.input.ts';

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
  let x: DecimalFilter = {};
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
}
{
  let x: DummyCreateInput = { decimal: 0 as any, id: '1' };
  let p: Prisma.DummyCreateInput = { decimal: 0 as any, id: '2' };
  p = x;
}
{
  let x: DummyCreateInput['json'] = {};
  let p: Prisma.DummyCreateInput['json'] = {};
  p = x;
  p;
}
{
  // Will not be fixed, but can by adding id?: `${SortOrder}` | Prisma.Types.Skip
  // let x: UserMaxOrderByAggregateInput['id'] =
  //   null as unknown as Prisma.UserMaxOrderByAggregateInput['id'];
  let p: Prisma.UserMaxOrderByAggregateInput['id'] =
    null as unknown as UserMaxOrderByAggregateInput['id'];
}
{
  let x: UserMaxOrderByAggregateInput = {};
  let p: Prisma.UserMaxOrderByAggregateInput = {};
  p = x; // To prisma
  // FIXME: Skip is not assignable to type asc | desc | undefined
  // x = p; // Prisma to own object type
}
{
  let x: UserCreateInput = {} as unknown as UserCreateInput;
  let p: Prisma.UserCreateInput = {} as unknown as Prisma.UserCreateInput;
}
{
  let x: Dummy['bytes'] = null as unknown as P.Dummy['bytes'];
  let p: P.Dummy['bytes'] = null as unknown as Dummy['bytes'];
  p = x;
  x = p;
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
        _count: true,
        articles: true,
        comments: true,
        favoriteArticles: true,
        followers: true,
        following: true,
        profile: true,
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
{
  class UserWhereUniqueInput1 extends UserWhereUniqueInput {
    @Field(() => String, { nullable: true })
    id!: string;
  }
  const userWhereUniqueInput1: UserWhereUniqueInput1 = { id: '1' };

  $prisma.user.findUnique({
    where: userWhereUniqueInput1,
  });
}
