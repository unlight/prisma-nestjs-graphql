import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class Dummy {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: true })
  date!: Date | null;

  @Field(() => Int, { nullable: true })
  int!: number | null;

  @Field(() => Float, { nullable: true })
  float!: number | null;

  @Field(() => String, { nullable: true })
  bytes!: Uint8Array | null;

  @Field(() => GraphQLDecimal, { nullable: false })
  decimal!: Decimal;

  @Field(() => [GraphQLDecimal], { nullable: true })
  decimals!: Array<Decimal>;

  @Field(() => String, { nullable: true })
  bigInt!: bigint | null;

  @Field(() => GraphQLJSON, { nullable: true })
  json!: any | null;

  @Field(() => [String], { nullable: true })
  friends!: Array<string>;
}
