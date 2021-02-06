import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';

import { Article } from '../article/article.model';
import { Comment } from '../comment/comment.model';
import { Role } from '../prisma/role.enum';

@ObjectType()
export class User {
    @Field(() => ID, {
        nullable: false,
    })
    id!: string;

    @Field(() => String, {
        nullable: false,
    })
    email!: string;

    @Field(() => String, {
        nullable: false,
        description: "User's name",
    })
    name!: string;

    @Field(() => String, {
        nullable: false,
    })
    password!: string;

    @Field(() => String, {
        nullable: true,
    })
    bio?: string;

    @Field(() => String, {
        nullable: true,
    })
    image?: string;

    @Field(() => [User], {
        nullable: false,
    })
    following!: Array<User>;

    @Field(() => [User], {
        nullable: false,
    })
    followers!: Array<User>;

    @Field(() => [Article], {
        nullable: false,
    })
    favoriteArticles!: Array<Article>;

    @Field(() => [Article], {
        nullable: false,
    })
    articles!: Array<Article>;

    @Field(() => [Comment], {
        nullable: false,
    })
    comments!: Array<Comment>;

    @Field(() => Int, {
        nullable: true,
    })
    countComments?: number;

    @Field(() => Float, {
        nullable: true,
    })
    rating?: number;

    @Field(() => Role, {
        nullable: true,
    })
    role?: Role;
}
