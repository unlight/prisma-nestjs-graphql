import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TagWhereInput } from './tag-where.input.ts';
import { Type } from 'class-transformer';
import { TagOrderByWithRelationInput } from './tag-order-by-with-relation.input.ts';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input.ts';
import { Int } from '@nestjs/graphql';
import { TagCountAggregateInput } from './tag-count-aggregate.input.ts';
import { TagMinAggregateInput } from './tag-min-aggregate.input.ts';
import { TagMaxAggregateInput } from './tag-max-aggregate.input.ts';

@ArgsType()
export class TagAggregateArgs {
  @Field(() => TagWhereInput, { nullable: true })
  @Type(() => TagWhereInput)
  where?: TagWhereInput;

  @Field(() => [TagOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<TagOrderByWithRelationInput>;

  @Field(() => TagWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => TagCountAggregateInput, { nullable: true })
  _count?: TagCountAggregateInput;

  @Field(() => TagMinAggregateInput, { nullable: true })
  _min?: TagMinAggregateInput;

  @Field(() => TagMaxAggregateInput, { nullable: true })
  _max?: TagMaxAggregateInput;
}
