import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedDecimalNullableFilter } from './nested-decimal-nullable-filter.input';

@InputType()
export class NestedDecimalNullableWithAggregatesFilter {
  @Field(() => GraphQLDecimal, { nullable: true })
  equals?: Decimal;

  @Field(() => [GraphQLDecimal], { nullable: true })
  in?: Array<Decimal>;

  @Field(() => [GraphQLDecimal], { nullable: true })
  notIn?: Array<Decimal>;

  @Field(() => GraphQLDecimal, { nullable: true })
  lt?: Decimal;

  @Field(() => GraphQLDecimal, { nullable: true })
  lte?: Decimal;

  @Field(() => GraphQLDecimal, { nullable: true })
  gt?: Decimal;

  @Field(() => GraphQLDecimal, { nullable: true })
  gte?: Decimal;

  @Field(() => NestedDecimalNullableWithAggregatesFilter, { nullable: true })
  not?: NestedDecimalNullableWithAggregatesFilter;

  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: NestedIntNullableFilter;

  @Field(() => NestedDecimalNullableFilter, { nullable: true })
  _avg?: NestedDecimalNullableFilter;

  @Field(() => NestedDecimalNullableFilter, { nullable: true })
  _sum?: NestedDecimalNullableFilter;

  @Field(() => NestedDecimalNullableFilter, { nullable: true })
  _min?: NestedDecimalNullableFilter;

  @Field(() => NestedDecimalNullableFilter, { nullable: true })
  _max?: NestedDecimalNullableFilter;
}
