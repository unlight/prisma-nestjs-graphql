import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleScalarWhereInput } from './article-scalar-where.input';
import { Type } from 'class-transformer';
import { ArticleUpdateManyMutationInput } from './article-update-many-mutation.input';

@InputType()
export class ArticleUpdateManyWithWhereWithoutAuthorInput {
  @Field(() => ArticleScalarWhereInput, { nullable: false })
  @Type(() => ArticleScalarWhereInput)
  where!: ArticleScalarWhereInput;

  @Field(() => ArticleUpdateManyMutationInput, { nullable: false })
  @Type(() => ArticleUpdateManyMutationInput)
  data!: ArticleUpdateManyMutationInput;
}
