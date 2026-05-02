import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DummyWhereInput } from './dummy-where.input.ts';
import { Type } from 'class-transformer';
import { DummyOrderByWithRelationInput } from './dummy-order-by-with-relation.input.ts';
import { Prisma } from '@prisma/client';
import { DummyWhereUniqueInput } from './dummy-where-unique.input.ts';
import { Int } from '@nestjs/graphql';
import { DummyScalarFieldEnum } from './dummy-scalar-field.enum.ts';

@ArgsType()
export class FindManyDummyArgs {
  @Field(() => DummyWhereInput, { nullable: true })
  @Type(() => DummyWhereInput)
  where?: DummyWhereInput;

  @Field(() => [DummyOrderByWithRelationInput], { nullable: true })
  @Type(() => DummyOrderByWithRelationInput)
  orderBy?: Array<DummyOrderByWithRelationInput>;

  @Field(() => DummyWhereUniqueInput, { nullable: true })
  @Type(() => DummyWhereUniqueInput)
  cursor?: Prisma.AtLeast<DummyWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [DummyScalarFieldEnum], { nullable: true })
  distinct?: Array<`${DummyScalarFieldEnum}`>;
}
