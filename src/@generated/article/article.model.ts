import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

import { Comment } from '../comment/comment.model';
import { Tag } from '../tag/tag.model';
import { User } from '../user/user.model';

@ObjectType({})
export class Article {
    @Field(() => ID, {
        nullable: false,
    })
    id!: string;

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

    @Field(() => [Tag], {
        nullable: true,
    })
    tags?: Array<Tag>;

    @Field(() => String, {
        nullable: false,
    })
    createdAt!: Date | string;

    @Field(() => String, {
        nullable: false,
    })
    updatedAt!: Date | string;

    @Field(() => Int, {
        nullable: false,
        defaultValue: 0,
    })
    favoritesCount!: number;

    @Field(() => User, {
        nullable: false,
    })
    author!: User;

    @Field(() => String, {
        nullable: false,
    })
    readonly authorId!: string;

    @Field(() => [User], {
        nullable: true,
    })
    favoritedBy?: Array<User>;

    @Field(() => [Comment], {
        nullable: true,
    })
    comments?: Array<Comment>;

    @Field(() => Boolean, {
        nullable: true,
        defaultValue: true,
    })
    active?: boolean;
}
