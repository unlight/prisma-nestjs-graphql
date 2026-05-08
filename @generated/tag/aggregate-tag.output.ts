import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TagCountAggregate } from './tag-count-aggregate.output.ts';
import { TagMinAggregate } from './tag-min-aggregate.output.ts';
import { TagMaxAggregate } from './tag-max-aggregate.output.ts';

@ObjectType()
export class AggregateTag {
  @Field(() => TagCountAggregate, { nullable: true })
  _count?: Identity<TagCountAggregate>;

  @Field(() => TagMinAggregate, { nullable: true })
  _min?: Identity<TagMinAggregate>;

  @Field(() => TagMaxAggregate, { nullable: true })
  _max?: Identity<TagMaxAggregate>;
}
