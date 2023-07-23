import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DummyWhereInput } from './dummy-where.input';
import { Type } from 'class-transformer';
import { DummyOrderByWithRelationAndSearchRelevanceInput } from './dummy-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { DummyWhereUniqueInput } from './dummy-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DummyScalarFieldEnum } from './dummy-scalar-field.enum';

@ArgsType()
export class FindFirstDummyOrThrowArgs {
  @Field(() => DummyWhereInput, { nullable: true })
  @Type(() => DummyWhereInput)
  where?: DummyWhereInput;

  @Field(() => [DummyOrderByWithRelationAndSearchRelevanceInput], { nullable: true })
  @Type(() => DummyOrderByWithRelationAndSearchRelevanceInput)
  orderBy?: Array<DummyOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => DummyWhereUniqueInput, { nullable: true })
  @Type(() => DummyWhereUniqueInput)
  cursor?: Prisma.AtLeast<DummyWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [DummyScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof DummyScalarFieldEnum>;
}
