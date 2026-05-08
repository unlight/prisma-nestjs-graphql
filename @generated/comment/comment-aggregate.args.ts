import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { CommentWhereInput } from './comment-where.input.ts';
import { Type } from 'class-transformer';
import { CommentOrderByWithRelationInput } from './comment-order-by-with-relation.input.ts';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input.ts';
import { Int } from '@nestjs/graphql';
import { CommentCountAggregateInput } from './comment-count-aggregate.input.ts';
import { CommentMinAggregateInput } from './comment-min-aggregate.input.ts';
import { CommentMaxAggregateInput } from './comment-max-aggregate.input.ts';

@ArgsType()
export class CommentAggregateArgs {
  @Field(() => CommentWhereInput, { nullable: true })
  @Type(() => CommentWhereInput)
  where?: Identity<CommentWhereInput>;

  @Field(() => [CommentOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<CommentOrderByWithRelationInput>;

  @Field(() => CommentWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => CommentCountAggregateInput, { nullable: true })
  _count?: Identity<CommentCountAggregateInput>;

  @Field(() => CommentMinAggregateInput, { nullable: true })
  _min?: Identity<CommentMinAggregateInput>;

  @Field(() => CommentMaxAggregateInput, { nullable: true })
  _max?: Identity<CommentMaxAggregateInput>;
}
