import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleUpdateWithoutFavoritedByInput } from './article-update-without-favorited-by.input';

@InputType()
export class ArticleUpdateWithWhereUniqueWithoutFavoritedByInput {
  @Field(() => ArticleWhereUniqueInput, { nullable: false })
  @Type(() => ArticleWhereUniqueInput)
  where!: ArticleWhereUniqueInput;

  @Field(() => ArticleUpdateWithoutFavoritedByInput, { nullable: false })
  @Type(() => ArticleUpdateWithoutFavoritedByInput)
  data!: ArticleUpdateWithoutFavoritedByInput;
}
