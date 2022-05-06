import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ArticleSumAggregate {
  @Field(() => Int, { nullable: true })
  favoritesCount?: number;
}
