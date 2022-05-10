import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutFavoriteArticlesInput } from '../user/user-unchecked-create-nested-many-without-favorite-articles.input';
import { CommentUncheckedCreateNestedManyWithoutArticleInput } from '../comment/comment-unchecked-create-nested-many-without-article.input';

@InputType()
export class ArticleUncheckedCreateWithoutTagsInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  slug!: string;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => String, { nullable: false })
  body!: string;

  @HideField()
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => Int, { nullable: true })
  favoritesCount?: number;

  @Field(() => String, { nullable: false })
  authorId!: string;

  @Field(() => UserUncheckedCreateNestedManyWithoutFavoriteArticlesInput, {
    nullable: true,
  })
  favoritedBy?: UserUncheckedCreateNestedManyWithoutFavoriteArticlesInput;

  @Field(() => CommentUncheckedCreateNestedManyWithoutArticleInput, { nullable: true })
  comments?: CommentUncheckedCreateNestedManyWithoutArticleInput;

  @Field(() => Boolean, { nullable: true })
  active?: boolean;
}
