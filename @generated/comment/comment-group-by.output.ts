import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { CommentCountAggregate } from './comment-count-aggregate.output.ts';
import { CommentMinAggregate } from './comment-min-aggregate.output.ts';
import { CommentMaxAggregate } from './comment-max-aggregate.output.ts';

@ObjectType()
export class CommentGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => String, { nullable: false })
  body!: string;

  @Field(() => String, { nullable: false })
  authorId!: string;

  @Field(() => String, { nullable: true })
  articleId?: string;

  @Field(() => CommentCountAggregate, { nullable: true })
  _count?: Identity<CommentCountAggregate>;

  @Field(() => CommentMinAggregate, { nullable: true })
  _min?: Identity<CommentMinAggregate>;

  @Field(() => CommentMaxAggregate, { nullable: true })
  _max?: Identity<CommentMaxAggregate>;
}
