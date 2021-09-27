import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Article } from '../article/article.model';

@ObjectType()
export class Comment {
    @Field(() => ID, { nullable: false })
    id!: string;

    @Field(() => Date, { nullable: false })
    createdAt!: Date;

    @Field(() => Date, { nullable: false })
    updatedAt!: Date;

    @Field(() => String, { nullable: false })
    body!: string;

    @Field(() => User, { nullable: false })
    author?: User;

    @Field(() => String, { nullable: false })
    authorId!: string;

    @Field(() => Article, { nullable: true })
    article?: Article | null;

    @Field(() => String, { nullable: true })
    articleId!: string | null;
}
