import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TagUpdateManyMutationInput } from './tag-update-many-mutation.input.ts';
import { Type } from 'class-transformer';
import { TagWhereInput } from './tag-where.input.ts';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyTagArgs {
  @Field(() => TagUpdateManyMutationInput, { nullable: false })
  @Type(() => TagUpdateManyMutationInput)
  data!: Identity<TagUpdateManyMutationInput>;

  @Field(() => TagWhereInput, { nullable: true })
  @Type(() => TagWhereInput)
  where?: Identity<TagWhereInput>;

  @Field(() => Int, { nullable: true })
  limit?: number;
}
