import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import type { Identity } from 'identity-type';
import { IntFilter } from './int-filter.input.ts';
import { BytesFilter } from './bytes-filter.input.ts';

@InputType()
export class BytesWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: Prisma.Bytes;

  @Field(() => [String], { nullable: true })
  in?: Array<Prisma.Bytes>;

  @Field(() => [String], { nullable: true })
  notIn?: Array<Prisma.Bytes>;

  @Field(() => BytesWithAggregatesFilter, { nullable: true })
  not?: Identity<BytesWithAggregatesFilter>;

  @Field(() => IntFilter, { nullable: true })
  _count?: Identity<IntFilter>;

  @Field(() => BytesFilter, { nullable: true })
  _min?: Identity<BytesFilter>;

  @Field(() => BytesFilter, { nullable: true })
  _max?: Identity<BytesFilter>;
}
