import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ArticleScalarWhereInput } from './article-scalar-where.input.ts';
import { Type } from 'class-transformer';
import { ArticleUpdateManyMutationInput } from './article-update-many-mutation.input.ts';

@InputType()
export class ArticleUpdateManyWithWhereWithoutAuthorInput {
  @Field(() => ArticleScalarWhereInput, { nullable: false })
  @Type(() => ArticleScalarWhereInput)
  where!: Identity<ArticleScalarWhereInput>;

  @Field(() => ArticleUpdateManyMutationInput, { nullable: false })
  @Type(() => ArticleUpdateManyMutationInput)
  data!: Identity<ArticleUpdateManyMutationInput>;
}
