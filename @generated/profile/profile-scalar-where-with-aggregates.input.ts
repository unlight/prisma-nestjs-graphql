import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input.ts';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input.ts';

@InputType()
export class ProfileScalarWhereWithAggregatesInput {
  @Field(() => [ProfileScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<ProfileScalarWhereWithAggregatesInput>;

  @Field(() => [ProfileScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<ProfileScalarWhereWithAggregatesInput>;

  @Field(() => [ProfileScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<ProfileScalarWhereWithAggregatesInput>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: Identity<IntWithAggregatesFilter>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userId?: Identity<StringWithAggregatesFilter>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  dummy?: Identity<StringWithAggregatesFilter>;
}
