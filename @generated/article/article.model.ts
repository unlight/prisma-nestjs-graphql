import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Tag } from '../tag/tag.model';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Comment } from '../comment/comment.model';
import { ArticleCount } from './article-count.output';

@ObjectType()
export class Article {
    @Field(() => ID, { nullable: false })
    id!: string;

    @Field(() => String, { nullable: false })
    slug!: string;

    @Field(() => String, { nullable: false })
    title!: string;

    @Field(() => String, { nullable: false })
    description!: string;

    @Field(() => String, { nullable: false })
    body!: string;

    @Field(() => [Tag], { nullable: true })
    tags?: Array<Tag>;

    @Field(() => Date, { nullable: false })
    createdAt!: Date;

    @Field(() => Date, { nullable: false })
    updatedAt!: Date;

    @Field(() => Int, { nullable: false, defaultValue: 0 })
    favoritesCount!: number;

    @Field(() => User, { nullable: false })
    author?: User;

    @Field(() => String, { nullable: false })
    authorId!: string;

    @Field(() => [User], { nullable: true })
    favoritedBy?: Array<User>;

    @Field(() => [Comment], { nullable: true })
    comments?: Array<Comment>;

    @Field(() => Boolean, { nullable: true, defaultValue: true })
    active!: boolean | null;

    @Field(() => ArticleCount, { nullable: true })
    _count?: ArticleCount | null;
}
