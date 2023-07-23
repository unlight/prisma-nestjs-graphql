import { PrismaSelect } from '@paljs/plugins';
import { PrismaClient } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql';

import { Profile } from '../../@generated/profile/profile.model';
import { AggregateUser } from '../../@generated/user/aggregate-user.output';
import { CreateManyUserArgs } from '../../@generated/user/create-many-user.args';
import { CreateOneUserArgs } from '../../@generated/user/create-one-user.args';
import { User } from '../../@generated/user/user.model';
import { UserAggregateArgs } from '../../@generated/user/user-aggregate.args';
import { UserCreateInput } from '../../@generated/user/user-create.input';
import { UserUpdateInput } from '../../@generated/user/user-update.input';
import { UserWhereInput } from '../../@generated/user/user-where.input';
import { UserDateInput } from './user-date.input';
import { Resolver, Query, Args, Mutation, Info } from '@nestjs/graphql';

const prisma = new PrismaClient({
  errorFormat: 'colorless',
  log: [
    {
      emit: 'event',
      level: 'query',
    },
  ],
});

prisma.$on('query', event => {
  console.log(event);
});

/**
 * Resolves user object type.
 */
@Resolver(() => User)
export class UserResolver {
  /**
   * Query for single user.
   */
  @Query(() => [User])
  async users(@Args('where') where: UserWhereInput, @Info() info: GraphQLResolveInfo) {
    const select = new PrismaSelect(info).value;
    // console.log('select', select);
    return await prisma.user.findMany({ where, ...select });
  }

  @Mutation(() => User, { nullable: true })
  async userUpdate(@Args('user') user: UserUpdateInput): Promise<any> {
    return;
  }

  @Mutation(() => User, { nullable: true })
  async userCreate(@Args('user') user: UserCreateInput): Promise<any> {
    return;
  }

  @Mutation(() => User, { nullable: true })
  async createOneUser(@Args() args: CreateOneUserArgs): Promise<any> {
    console.log('args', args);
    return;
  }

  @Mutation(() => User, { nullable: true })
  async userInfo(@Args('user') user: UserDateInput): Promise<any> {
    console.log('userInfo Args', user.date, typeof user.date, user.date?.constructor);
    return;
  }

  @Mutation(() => [User], { nullable: true })
  async createManyUsers(@Args() createManyUserArgs: CreateManyUserArgs): Promise<any> {
    console.log('createManyUserArgs', createManyUserArgs);
    return;
  }

  @Query(() => AggregateUser)
  userAggregate(@Args() args: UserAggregateArgs) {
    return prisma.user.aggregate(args);
  }

  @Query(() => Profile)
  queryProfile() {
    const p = new Profile();
    p.id = 1;
    return p;
  }
}
