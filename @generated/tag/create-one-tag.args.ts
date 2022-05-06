import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TagCreateInput } from './tag-create.input';

@ArgsType()
export class CreateOneTagArgs {
  @Field(() => TagCreateInput, { nullable: false })
  data!: TagCreateInput;
}
