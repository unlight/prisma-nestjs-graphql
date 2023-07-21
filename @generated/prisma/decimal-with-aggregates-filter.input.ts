import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { NestedDecimalWithAggregatesFilter } from './nested-decimal-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedDecimalFilter } from './nested-decimal-filter.input';

@InputType()
export class DecimalWithAggregatesFilter {
  @Field(() => GraphQLDecimal, { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  equals?: Prisma.Decimal;

  @Field(() => [GraphQLDecimal], { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  in?: Array<Prisma.Decimal>;

  @Field(() => [GraphQLDecimal], { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  notIn?: Array<Prisma.Decimal>;

  @Field(() => GraphQLDecimal, { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  lt?: Prisma.Decimal;

  @Field(() => GraphQLDecimal, { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  lte?: Prisma.Decimal;

  @Field(() => GraphQLDecimal, { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  gt?: Prisma.Decimal;

  @Field(() => GraphQLDecimal, { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  gte?: Prisma.Decimal;

  @Field(() => NestedDecimalWithAggregatesFilter, { nullable: true })
  not?: NestedDecimalWithAggregatesFilter;

  @Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter;

  @Field(() => NestedDecimalFilter, { nullable: true })
  _avg?: NestedDecimalFilter;

  @Field(() => NestedDecimalFilter, { nullable: true })
  _sum?: NestedDecimalFilter;

  @Field(() => NestedDecimalFilter, { nullable: true })
  _min?: NestedDecimalFilter;

  @Field(() => NestedDecimalFilter, { nullable: true })
  _max?: NestedDecimalFilter;
}
