import { Field, InputType, Int } from '@nestjs/graphql';

import { CommentUncheckedCreateManyWithoutArticleInput } from '../comment/comment-unchecked-create-many-without-article.input';

@InputType()
export class ArticleUncheckedCreateWithoutAuthorInput {
    @Field(() => String, {
        nullable: true,
    })
    id?: string;

    @Field(() => String, {
        nullable: false,
    })
    slug!: string;

    @Field(() => String, {
        nullable: false,
    })
    title!: string;

    @Field(() => String, {
        nullable: false,
    })
    description!: string;

    @Field(() => String, {
        nullable: false,
    })
    body!: string;

    @Field(() => String, {
        nullable: true,
    })
    createdAt?: Date | string;

    @Field(() => String, {
        nullable: true,
    })
    updatedAt?: Date | string;

    @Field(() => Int, {
        nullable: true,
    })
    favoritesCount?: number;

    @Field(() => Boolean, {
        nullable: true,
    })
    active?: boolean;

    @Field(() => CommentUncheckedCreateManyWithoutArticleInput, {
        nullable: true,
    })
    comments?: CommentUncheckedCreateManyWithoutArticleInput;
}
