import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CommentCountAggregate } from './comment-count-aggregate.output.ts';
import { CommentMinAggregate } from './comment-min-aggregate.output.ts';
import { CommentMaxAggregate } from './comment-max-aggregate.output.ts';

@ObjectType()
export class AggregateComment {
  @Field(() => CommentCountAggregate, { nullable: true })
  _count?: CommentCountAggregate;

  @Field(() => CommentMinAggregate, { nullable: true })
  _min?: CommentMinAggregate;

  @Field(() => CommentMaxAggregate, { nullable: true })
  _max?: CommentMaxAggregate;
}
