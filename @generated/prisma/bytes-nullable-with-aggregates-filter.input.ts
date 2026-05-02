import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
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
  not?: NestedBytesNullableWithAggregatesFilter;

  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: NestedIntNullableFilter;

  @Field(() => NestedBytesNullableFilter, { nullable: true })
  _min?: NestedBytesNullableFilter;

  @Field(() => NestedBytesNullableFilter, { nullable: true })
  _max?: NestedBytesNullableFilter;
}
