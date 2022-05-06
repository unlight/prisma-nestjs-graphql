import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {
  @Field(() => Int, { nullable: false })
  following?: number;

  @Field(() => Int, { nullable: false })
  followers?: number;

  @Field(() => Int, { nullable: false })
  favoriteArticles?: number;

  @Field(() => Int, { nullable: false })
  articles?: number;

  @Field(() => Int, { nullable: false })
  comments?: number;
}
