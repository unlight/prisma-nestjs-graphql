import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ArticleCount {
  @Field(() => Int, { nullable: false })
  tags?: number;

  @Field(() => Int, { nullable: false })
  favoritedBy?: number;

  @Field(() => Int, { nullable: false })
  comments?: number;
}
