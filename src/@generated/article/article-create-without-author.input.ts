import { Field, InputType, Int } from '@nestjs/graphql';

import { CommentCreateNestedManyWithoutArticleInput } from '../comment/comment-create-nested-many-without-article.input';
import { TagCreateNestedManyWithoutArticlesInput } from '../tag/tag-create-nested-many-without-articles.input';
import { UserCreateNestedManyWithoutFavoriteArticlesInput } from '../user/user-create-nested-many-without-favorite-articles.input';

@InputType()
export class ArticleCreateWithoutAuthorInput {
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

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string;

    @Field(() => Int, { nullable: true })
    favoritesCount?: number;

    @Field(() => Boolean, { nullable: true })
    active?: boolean;

    @Field(() => TagCreateNestedManyWithoutArticlesInput, { nullable: true })
    tags?: TagCreateNestedManyWithoutArticlesInput;

    @Field(() => UserCreateNestedManyWithoutFavoriteArticlesInput, { nullable: true })
    favoritedBy?: UserCreateNestedManyWithoutFavoriteArticlesInput;

    @Field(() => CommentCreateNestedManyWithoutArticleInput, { nullable: true })
    comments?: CommentCreateNestedManyWithoutArticleInput;
}
