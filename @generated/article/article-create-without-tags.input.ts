import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutArticlesInput } from '../user/user-create-nested-one-without-articles.input';
import { Type } from 'class-transformer';
import { UserCreateNestedManyWithoutFavoriteArticlesInput } from '../user/user-create-nested-many-without-favorite-articles.input';
import { CommentCreateNestedManyWithoutArticleInput } from '../comment/comment-create-nested-many-without-article.input';

@InputType()
export class ArticleCreateWithoutTagsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @HideField()
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    favoritesCount?: number;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => UserCreateNestedOneWithoutArticlesInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutArticlesInput)
    author!: UserCreateNestedOneWithoutArticlesInput;

    @Field(() => UserCreateNestedManyWithoutFavoriteArticlesInput, {nullable:true})
    @Type(() => UserCreateNestedManyWithoutFavoriteArticlesInput)
    favoritedBy?: UserCreateNestedManyWithoutFavoriteArticlesInput;

    @Field(() => CommentCreateNestedManyWithoutArticleInput, {nullable:true})
    @Type(() => CommentCreateNestedManyWithoutArticleInput)
    comments?: CommentCreateNestedManyWithoutArticleInput;
}
