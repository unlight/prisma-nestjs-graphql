import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TagCountAggregate } from './tag-count-aggregate.output.ts';
import { TagMinAggregate } from './tag-min-aggregate.output.ts';
import { TagMaxAggregate } from './tag-max-aggregate.output.ts';

@ObjectType()
export class TagGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => TagCountAggregate, { nullable: true })
  _count?: TagCountAggregate;

  @Field(() => TagMinAggregate, { nullable: true })
  _min?: TagMinAggregate;

  @Field(() => TagMaxAggregate, { nullable: true })
  _max?: TagMaxAggregate;
}
