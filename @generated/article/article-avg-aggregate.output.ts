import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ArticleAvgAggregate {
  @Field(() => Float, { nullable: true })
  favoritesCount?: number;
}
