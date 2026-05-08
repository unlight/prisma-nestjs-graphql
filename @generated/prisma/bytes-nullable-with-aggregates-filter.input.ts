import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import type { Identity } from 'identity-type';
import { NestedBytesNullableWithAggregatesFilter } from './nested-bytes-nullable-with-aggregates-filter.input.ts';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input.ts';
import { NestedBytesNullableFilter } from './nested-bytes-nullable-filter.input.ts';

@InputType()
export class BytesNullableWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: Prisma.Bytes;

  @Field(() => [String], { nullable: true })
  in?: Array<Prisma.Bytes>;

  @Field(() => [String], { nullable: true })
  notIn?: Array<Prisma.Bytes>;

  @Field(() => NestedBytesNullableWithAggregatesFilter, { nullable: true })
  not?: Identity<NestedBytesNullableWithAggregatesFilter>;

  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: Identity<NestedIntNullableFilter>;

  @Field(() => NestedBytesNullableFilter, { nullable: true })
  _min?: Identity<NestedBytesNullableFilter>;

  @Field(() => NestedBytesNullableFilter, { nullable: true })
  _max?: Identity<NestedBytesNullableFilter>;
}
