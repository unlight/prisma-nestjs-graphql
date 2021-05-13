import { Prisma, PrismaClient } from '@prisma/client';
import * as P from '@prisma/client';
import { Decimal } from 'decimal.js';

import { Comment } from '../@generated/comment/comment.model';
import { Dummy } from '../@generated/dummy/dummy.model';
import { DummyCreateInput } from '../@generated/dummy/dummy-create.input';
import { DateTimeFilter } from '../@generated/prisma/date-time-filter.input';
import { FloatFilter } from '../@generated/prisma/float-filter.input';
import { IntFilter } from '../@generated/prisma/int-filter.input';
import { StringFilter } from '../@generated/prisma/string-filter.input';
import { AggregateUserArgs } from '../@generated/user/aggregate-user.args';
import { FindManyUserArgs } from '../@generated/user/find-many-user.args';
import { GroupByUserArgs } from '../@generated/user/group-by-user.args';
import { User } from '../@generated/user/user.model';
import { UserCreateInput } from '../@generated/user/user-create.input';
import { UserCreateWithoutArticlesInput } from '../@generated/user/user-create-without-articles.input';
import { UserCreateWithoutCommentsInput } from '../@generated/user/user-create-without-comments.input';
import { UserListRelationFilter } from '../@generated/user/user-list-relation-filter.input';
import { UserScalarFieldEnum } from '../@generated/user/user-scalar-field.enum';
import { UserWhereInput } from '../@generated/user/user-where.input';

const $prisma = new PrismaClient();

{
    const t: Array<Date> | Array<string> = [];
    const m: Array<Date | string> = t; // t => m will fail
}
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
{
    const x: DummyCreateInput = { id: '1', floaty: 1 };
    let p: Prisma.DummyCreateInput = { id: '2', floaty: 2 };
    p = x;
}
{
    const x: DummyCreateInput['json'] = {};
    let p: Prisma.DummyCreateInput['json'] = {};
    p = x;
}
{
    const x: UserCreateInput = {
        email: '',
        name: '',
        password: '',
    };
    let p: Prisma.UserCreateInput = {
        email: '',
        name: '',
        password: '',
    };
    p = x;
}
{
    // $prisma.user.groupBy({ by: ['name'], count: { _all: true } }).then(([user]) => {
    //     user.name;
    //     user.count;
    // });
}
// {
//     // incompatible
//     let x: User = {
//         id: '',
//         email: '',
//         name: '',
//         password: '',
//     };
//     let p: P.User = {
//         id: '',
//         email: '',
//         name: '',
//         password: '',
//         bio: null,
//         image: null,
//         countComments: null,
//         rating: null,
//         role: null,
//     };
//     x = p;
// }
{
    // OK
    // const x: RDecimal = new RDecimal(0);
    // let p: Prisma.Decimal = new Prisma.Decimal(0);
    // p = x;
}
{
    // Fails
    // const x: Decimal = new Decimal(0);
    // let p: Prisma.Decimal = new Prisma.Decimal(0);
    // p = x;
}
{
    // Fails
    // const x: Prisma.Decimal = new Prisma.Decimal(0);
    // let p: Decimal = new Decimal(0);
    // p = x;
}
{
    const x: Dummy = {
        id: '',
        created: new Date(),
        floaty: 1,
        int: 1,
        float: 1,
        bytes: Buffer.from('b'),
        // eslint-disable-next-line unicorn/no-null
        decimal: '0.1',
        bigInt: BigInt('1'),
        json: {},
        friends: [],
    };
    let p: P.Dummy = {
        id: '',
        created: new Date(),
        floaty: 1,
        int: 1,
        float: 1,
        bytes: Buffer.from('b'),
        // eslint-disable-next-line unicorn/no-null
        decimal: new Prisma.Decimal(0),
        bigInt: BigInt('1'),
        json: {},
        friends: [],
    };
    p = x;
}
