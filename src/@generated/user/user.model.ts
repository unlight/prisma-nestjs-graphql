import { Field, Float, HideField, ID, Int, ObjectType } from '@nestjs/graphql';

import { Article } from '../article/article.model';
import { Comment } from '../comment/comment.model';
import { Role } from '../prisma/role.enum';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {
    @Field(() => ID, { nullable: false })
    id!: string;

    @Field(() => String, { nullable: false })
    email!: string;

    @Field(() => String, { nullable: false, description: "User's name" })
    name!: string;

    @HideField()
    password!: string;

    @Field(() => String, { nullable: true })
    bio!: string | null;

    @Field(() => String, { nullable: true })
    image!: string | null;

    @Field(() => [User], { nullable: true })
    following!: Array<User>;

    @Field(() => [User], { nullable: true })
    followers!: Array<User>;

    @Field(() => [Article], { nullable: true })
    favoriteArticles!: Array<Article>;

    @Field(() => [Article], { nullable: true })
    articles!: Array<Article>;

    @Field(() => [Comment], { nullable: true })
    comments!: Array<Comment>;

    @Field(() => Int, { nullable: true })
    countComments!: number | null;

    @Field(() => Float, { nullable: true })
    rating!: number | null;

    @Field(() => Role, { nullable: true })
    role!: Role | null;

    @Field(() => UserCount, { nullable: true })
    _count!: UserCount;
}
