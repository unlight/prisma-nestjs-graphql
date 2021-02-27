import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Article } from '../article/article.model';
import { User } from '../user/user.model';

@ObjectType()
export class Comment {
    @Field(() => ID, {
        nullable: false,
    })
    id!: string;

    @Field(() => Date, {
        nullable: false,
    })
    createdAt!: Date | string;

    @Field(() => Date, {
        nullable: false,
    })
    updatedAt!: Date | string;

    @Field(() => String, {
        nullable: false,
    })
    body!: string;

    @Field(() => User, {
        nullable: false,
    })
    author!: User;

    @Field(() => String, {
        nullable: false,
    })
    authorId!: string;

    @Field(() => Article, {
        nullable: true,
    })
    article?: Article;

    @Field(() => String, {
        nullable: true,
    })
    articleId?: string;
}
