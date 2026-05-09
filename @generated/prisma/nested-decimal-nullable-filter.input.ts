import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client-runtime-utils';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';

@InputType()
export class NestedDecimalNullableFilter {
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

  @Field(() => NestedDecimalNullableFilter, { nullable: true })
  not?: Identity<NestedDecimalNullableFilter>;
}
