import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NestedBytesNullableWithAggregatesFilter } from './nested-bytes-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedBytesNullableFilter } from './nested-bytes-nullable-filter.input';

@InputType()
export class BytesNullableWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: Uint8Array;

  @Field(() => [String], { nullable: true })
  in?: Array<Uint8Array>;

  @Field(() => [String], { nullable: true })
  notIn?: Array<Uint8Array>;

  @Field(() => NestedBytesNullableWithAggregatesFilter, { nullable: true })
  not?: NestedBytesNullableWithAggregatesFilter;

  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: NestedIntNullableFilter;

  @Field(() => NestedBytesNullableFilter, { nullable: true })
  _min?: NestedBytesNullableFilter;

  @Field(() => NestedBytesNullableFilter, { nullable: true })
  _max?: NestedBytesNullableFilter;
}
