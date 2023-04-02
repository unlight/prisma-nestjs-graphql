import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { DummyCreatedecimalsInput } from './dummy-createdecimals.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DummyCreatefriendsInput } from './dummy-createfriends.input';

@InputType()
export class DummyUncheckedCreateInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: true })
  date?: Date | string;

  @Field(() => Int, { nullable: true })
  int?: number;

  @Field(() => Float, { nullable: true })
  float?: number;

  @Field(() => String, { nullable: true })
  bytes?: Buffer;

  @Field(() => GraphQLDecimal, { nullable: false })
  @Type(() => Object)
  @Transform(transformToDecimal)
  decimal!: Decimal;

  @Field(() => DummyCreatedecimalsInput, { nullable: true })
  @Type(() => DummyCreatedecimalsInput)
  decimals?: DummyCreatedecimalsInput;

  @Field(() => String, { nullable: true })
  bigInt?: bigint | number;

  @Field(() => GraphQLJSON, { nullable: true })
  json?: any;

  @Field(() => DummyCreatefriendsInput, { nullable: true })
  @Type(() => DummyCreatefriendsInput)
  friends?: DummyCreatefriendsInput;
}
