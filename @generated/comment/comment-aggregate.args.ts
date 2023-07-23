import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentWhereInput } from './comment-where.input';
import { Type } from 'class-transformer';
import { CommentOrderByWithRelationAndSearchRelevanceInput } from './comment-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CommentCountAggregateInput } from './comment-count-aggregate.input';
import { CommentMinAggregateInput } from './comment-min-aggregate.input';
import { CommentMaxAggregateInput } from './comment-max-aggregate.input';

@ArgsType()
export class CommentAggregateArgs {
  @Field(() => CommentWhereInput, { nullable: true })
  @Type(() => CommentWhereInput)
  where?: CommentWhereInput;

  @Field(() => [CommentOrderByWithRelationAndSearchRelevanceInput], { nullable: true })
  orderBy?: Array<CommentOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => CommentWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => CommentCountAggregateInput, { nullable: true })
  _count?: CommentCountAggregateInput;

  @Field(() => CommentMinAggregateInput, { nullable: true })
  _min?: CommentMinAggregateInput;

  @Field(() => CommentMaxAggregateInput, { nullable: true })
  _max?: CommentMaxAggregateInput;
}
