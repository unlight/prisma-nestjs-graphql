import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserOrderByWithRelationAndSearchRelevanceInput } from './user-order-by-with-relation-and-search-relevance.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserScalarFieldEnum } from './user-scalar-field.enum';

@ArgsType()
export class FindManyUserArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;

  @Field(() => [UserOrderByWithRelationAndSearchRelevanceInput], { nullable: true })
  @Type(() => UserOrderByWithRelationAndSearchRelevanceInput)
  orderBy?: Array<UserOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  cursor?: UserWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [UserScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
