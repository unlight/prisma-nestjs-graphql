import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagCreateInput } from './tag-create.input';
import { TagUpdateInput } from './tag-update.input';

@ArgsType()
export class UpsertOneTagArgs {
  @Field(() => TagWhereUniqueInput, { nullable: false })
  where!: TagWhereUniqueInput;

  @Field(() => TagCreateInput, { nullable: false })
  create!: TagCreateInput;

  @Field(() => TagUpdateInput, { nullable: false })
  update!: TagUpdateInput;
}
