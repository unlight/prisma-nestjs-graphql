import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DummyCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  date!: number;

  @Field(() => Int, { nullable: false })
  int!: number;

  @Field(() => Int, { nullable: false })
  float!: number;

  @Field(() => Int, { nullable: false })
  bytes!: number;

  @Field(() => Int, { nullable: false })
  decimal!: number;

  @Field(() => Int, { nullable: false })
  decimals!: number;

  @Field(() => Int, { nullable: false })
  bigInt!: number;

  @Field(() => Int, { nullable: false })
  json!: number;

  @Field(() => Int, { nullable: false })
  friends!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
