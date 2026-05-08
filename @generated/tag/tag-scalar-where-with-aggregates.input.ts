import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input.ts';

@InputType()
export class TagScalarWhereWithAggregatesInput {
  @Field(() => [TagScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<TagScalarWhereWithAggregatesInput>;

  @Field(() => [TagScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<TagScalarWhereWithAggregatesInput>;

  @Field(() => [TagScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<TagScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: Identity<StringWithAggregatesFilter>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: Identity<StringWithAggregatesFilter>;
}
