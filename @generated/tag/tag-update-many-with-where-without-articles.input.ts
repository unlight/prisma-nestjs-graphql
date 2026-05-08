import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TagScalarWhereInput } from './tag-scalar-where.input.ts';
import { Type } from 'class-transformer';
import { TagUpdateManyMutationInput } from './tag-update-many-mutation.input.ts';

@InputType()
export class TagUpdateManyWithWhereWithoutArticlesInput {
  @Field(() => TagScalarWhereInput, { nullable: false })
  @Type(() => TagScalarWhereInput)
  where!: Identity<TagScalarWhereInput>;

  @Field(() => TagUpdateManyMutationInput, { nullable: false })
  @Type(() => TagUpdateManyMutationInput)
  data!: Identity<TagUpdateManyMutationInput>;
}
