import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { CommentScalarWhereInput } from './comment-scalar-where.input.ts';
import { Type } from 'class-transformer';
import { CommentUpdateManyMutationInput } from './comment-update-many-mutation.input.ts';

@InputType()
export class CommentUpdateManyWithWhereWithoutArticleInput {
  @Field(() => CommentScalarWhereInput, { nullable: false })
  @Type(() => CommentScalarWhereInput)
  where!: Identity<CommentScalarWhereInput>;

  @Field(() => CommentUpdateManyMutationInput, { nullable: false })
  @Type(() => CommentUpdateManyMutationInput)
  data!: Identity<CommentUpdateManyMutationInput>;
}
