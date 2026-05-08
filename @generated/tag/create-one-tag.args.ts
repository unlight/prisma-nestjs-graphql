import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TagCreateInput } from './tag-create.input.ts';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTagArgs {
  @Field(() => TagCreateInput, { nullable: false })
  @Type(() => TagCreateInput)
  data!: Identity<TagCreateInput>;
}
