import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client-runtime-utils';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { NestedDecimalWithAggregatesFilter } from './nested-decimal-with-aggregates-filter.input.ts';
import type { Identity } from 'identity-type';
import { NestedIntFilter } from './nested-int-filter.input.ts';
import { NestedDecimalFilter } from './nested-decimal-filter.input.ts';

@InputType()
export class DecimalWithAggregatesFilter {
  @Field(() => GraphQLDecimal, { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  equals?: Decimal;

  @Field(() => [GraphQLDecimal], { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  in?: Array<Decimal>;

  @Field(() => [GraphQLDecimal], { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  notIn?: Array<Decimal>;

  @Field(() => GraphQLDecimal, { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  lt?: Decimal;

  @Field(() => GraphQLDecimal, { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  lte?: Decimal;

  @Field(() => GraphQLDecimal, { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  gt?: Decimal;

  @Field(() => GraphQLDecimal, { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  gte?: Decimal;

  @Field(() => NestedDecimalWithAggregatesFilter, { nullable: true })
  not?: Identity<NestedDecimalWithAggregatesFilter>;

  @Field(() => NestedIntFilter, { nullable: true })
  _count?: Identity<NestedIntFilter>;

  @Field(() => NestedDecimalFilter, { nullable: true })
  _avg?: Identity<NestedDecimalFilter>;

  @Field(() => NestedDecimalFilter, { nullable: true })
  _sum?: Identity<NestedDecimalFilter>;

  @Field(() => NestedDecimalFilter, { nullable: true })
  _min?: Identity<NestedDecimalFilter>;

  @Field(() => NestedDecimalFilter, { nullable: true })
  _max?: Identity<NestedDecimalFilter>;
}
