import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client-runtime-utils';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { IntFilter } from './int-filter.input.ts';
import { DecimalFilter } from './decimal-filter.input.ts';

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

  @Field(() => DecimalWithAggregatesFilter, { nullable: true })
  not?: Identity<DecimalWithAggregatesFilter>;

  @Field(() => IntFilter, { nullable: true })
  _count?: Identity<IntFilter>;

  @Field(() => DecimalFilter, { nullable: true })
  _avg?: Identity<DecimalFilter>;

  @Field(() => DecimalFilter, { nullable: true })
  _sum?: Identity<DecimalFilter>;

  @Field(() => DecimalFilter, { nullable: true })
  _min?: Identity<DecimalFilter>;

  @Field(() => DecimalFilter, { nullable: true })
  _max?: Identity<DecimalFilter>;
}
