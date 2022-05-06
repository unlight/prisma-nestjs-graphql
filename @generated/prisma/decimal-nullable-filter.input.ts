import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { NestedDecimalNullableFilter } from './nested-decimal-nullable-filter.input';

@InputType()
export class DecimalNullableFilter {
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

  @Field(() => NestedDecimalNullableFilter, { nullable: true })
  not?: NestedDecimalNullableFilter;
}
