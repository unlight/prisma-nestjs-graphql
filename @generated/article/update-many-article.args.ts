import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ArticleUpdateManyMutationInput } from './article-update-many-mutation.input.ts';
import { Type } from 'class-transformer';
import { ArticleWhereInput } from './article-where.input.ts';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyArticleArgs {
  @Field(() => ArticleUpdateManyMutationInput, { nullable: false })
  @Type(() => ArticleUpdateManyMutationInput)
  data!: Identity<ArticleUpdateManyMutationInput>;

  @Field(() => ArticleWhereInput, { nullable: true })
  @Type(() => ArticleWhereInput)
  where?: Identity<ArticleWhereInput>;

  @Field(() => Int, { nullable: true })
  limit?: number;
}
