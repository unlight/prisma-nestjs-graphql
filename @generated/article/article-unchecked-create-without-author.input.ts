import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TagUncheckedCreateNestedManyWithoutArticlesInput } from '../tag/tag-unchecked-create-nested-many-without-articles.input';
import { UserUncheckedCreateNestedManyWithoutFavoriteArticlesInput } from '../user/user-unchecked-create-nested-many-without-favorite-articles.input';
import { Type } from 'class-transformer';
import { CommentUncheckedCreateNestedManyWithoutArticleInput } from '../comment/comment-unchecked-create-nested-many-without-article.input';

@InputType()
export class ArticleUncheckedCreateWithoutAuthorInput {

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

    @Field(() => TagUncheckedCreateNestedManyWithoutArticlesInput, {nullable:true})
    tags?: TagUncheckedCreateNestedManyWithoutArticlesInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutFavoriteArticlesInput, {nullable:true})
    @Type(() => UserUncheckedCreateNestedManyWithoutFavoriteArticlesInput)
    favoritedBy?: UserUncheckedCreateNestedManyWithoutFavoriteArticlesInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutArticleInput, {nullable:true})
    @Type(() => CommentUncheckedCreateNestedManyWithoutArticleInput)
    comments?: CommentUncheckedCreateNestedManyWithoutArticleInput;
}
