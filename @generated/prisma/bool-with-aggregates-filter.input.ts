import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from './int-filter.input.ts';
import { BoolFilter } from './bool-filter.input.ts';

@InputType()
export class BoolWithAggregatesFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  not?: Identity<BoolWithAggregatesFilter>;

  @Field(() => IntFilter, { nullable: true })
  _count?: Identity<IntFilter>;

  @Field(() => BoolFilter, { nullable: true })
  _min?: Identity<BoolFilter>;

  @Field(() => BoolFilter, { nullable: true })
  _max?: Identity<BoolFilter>;
}
