import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TagCount {
  @Field(() => Int, { nullable: false })
  articles?: number;
}
