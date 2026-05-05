import { PrismaSelect } from '@paljs/plugins';
import { PrismaClient } from '@prisma/client';
import type { GraphQLResolveInfo } from 'graphql';
import { Profile } from '../../@generated/profile/profile.model.ts';
import { AggregateUser } from '../../@generated/user/aggregate-user.output.ts';
import { CreateManyUserArgs } from '../../@generated/user/create-many-user.args.ts';
import { CreateOneUserArgs } from '../../@generated/user/create-one-user.args.ts';
import { User } from '../../@generated/user/user.model.ts';
import { UserAggregateArgs } from '../../@generated/user/user-aggregate.args.ts';
import { UserCreateInput } from '../../@generated/user/user-create.input.ts';
import { UserUpdateInput } from '../../@generated/user/user-update.input.ts';
import { UserWhereInput } from '../../@generated/user/user-where.input.ts';
import { UserDateInput } from './user-date.input.ts';
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
  async users(
    @Args('where') where: UserWhereInput,
    @Info() info: GraphQLResolveInfo,
  ) {
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
    console.log(
      'userInfo Args',
      user.date,
      typeof user.date,
      user.date?.constructor,
    );
    return;
  }

  @Mutation(() => [User], { nullable: true })
  async createManyUsers(
    @Args() createManyUserArgs: CreateManyUserArgs,
  ): Promise<any> {
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
