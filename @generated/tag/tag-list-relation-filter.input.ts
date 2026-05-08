import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TagWhereInput } from './tag-where.input.ts';

@InputType()
export class TagListRelationFilter {
  @Field(() => TagWhereInput, { nullable: true })
  every?: Identity<TagWhereInput>;

  @Field(() => TagWhereInput, { nullable: true })
  some?: Identity<TagWhereInput>;

  @Field(() => TagWhereInput, { nullable: true })
  none?: Identity<TagWhereInput>;
}
