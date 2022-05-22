import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TagUpdateInput } from './tag-update.input';
import { Type } from 'class-transformer';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@ArgsType()
export class UpdateOneTagArgs {
  @Field(() => TagUpdateInput, { nullable: false })
  @Type(() => TagUpdateInput)
  data!: TagUpdateInput;

  @Field(() => TagWhereUniqueInput, { nullable: false })
  @Type(() => TagWhereUniqueInput)
  where!: TagWhereUniqueInput;
}
