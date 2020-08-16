import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Article } from '../article/article.model';
import { Comment } from '../comment/comment.model';

@ObjectType({
    description: undefined,
})
export class User {
    @Field(() => ID, {
        nullable: false,
        description: undefined,
    })
    id!: string;

    @Field(() => String, {
        nullable: false,
        description: undefined,
    })
    email!: string;

    @Field(() => String, {
        nullable: false,
        description: "User's name",
    })
    name!: string;

    @Field(() => String, {
        nullable: false,
        description: undefined,
    })
    password!: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    bio?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    image?: string | null;

    @Field(() => [User], {
        nullable: true,
        description: undefined,
    })
    following?: User[] | null;

    @Field(() => [User], {
        nullable: true,
        description: undefined,
    })
    followers?: User[] | null;

    @Field(() => [Article], {
        nullable: true,
        description: undefined,
    })
    favoriteArticles?: Article[] | null;

    @Field(() => [Article], {
        nullable: true,
        description: undefined,
    })
    articles?: Article[] | null;

    @Field(() => [Comment], {
        nullable: true,
        description: undefined,
    })
    comments?: Comment[] | null;
}
