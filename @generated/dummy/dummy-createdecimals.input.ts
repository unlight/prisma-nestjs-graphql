import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';

@InputType()
export class DummyCreatedecimalsInput {
  @Field(() => [GraphQLDecimal], { nullable: false })
  @Type(() => Object)
  @Transform(transformToDecimal)
  set!: Array<Prisma.Decimal>;
}
