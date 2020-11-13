import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';

import { Article } from '../article/article.model';
import { Comment } from '../comment/comment.model';
import { Role } from '../prisma/role.enum';

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
    bio?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    image?: string;

    @Field(() => [User], {
        nullable: true,
        description: undefined,
    })
    following?: Array<User>;

    @Field(() => [User], {
        nullable: true,
        description: undefined,
    })
    followers?: Array<User>;

    @Field(() => [Article], {
        nullable: true,
        description: undefined,
    })
    favoriteArticles?: Array<Article>;

    @Field(() => [Article], {
        nullable: true,
        description: undefined,
    })
    articles?: Array<Article>;

    @Field(() => [Comment], {
        nullable: true,
        description: undefined,
    })
    comments?: Array<Comment>;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    countComments?: number;

    @Field(() => Float, {
        nullable: true,
        description: undefined,
    })
    rating?: number;

    @Field(() => Role, {
        nullable: true,
        description: undefined,
    })
    role?: Role;
}
