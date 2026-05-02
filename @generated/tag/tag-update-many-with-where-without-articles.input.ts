import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagScalarWhereInput } from './tag-scalar-where.input.ts';
import { Type } from 'class-transformer';
import { TagUpdateManyMutationInput } from './tag-update-many-mutation.input.ts';

@InputType()
export class TagUpdateManyWithWhereWithoutArticlesInput {
  @Field(() => TagScalarWhereInput, { nullable: false })
  @Type(() => TagScalarWhereInput)
  where!: TagScalarWhereInput;

  @Field(() => TagUpdateManyMutationInput, { nullable: false })
  @Type(() => TagUpdateManyMutationInput)
  data!: TagUpdateManyMutationInput;
}
