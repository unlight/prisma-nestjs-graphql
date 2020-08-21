import { ObjectType, ID, Field } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Article } from '../article/article.model';

@ObjectType({
    description: undefined,
})
export class Comment {
    @Field(() => ID, {
        nullable: false,
        description: undefined,
    })
    id!: string;

    @Field(() => String, {
        nullable: false,
        description: undefined,
    })
    createdAt!: string;

    @Field(() => String, {
        nullable: false,
        description: undefined,
    })
    updatedAt!: string;

    @Field(() => String, {
        nullable: false,
        description: undefined,
    })
    body!: string;

    @Field(() => User, {
        nullable: false,
        description: undefined,
    })
    author!: User;

    @Field(() => String, {
        nullable: false,
        description: undefined,
    })
    readonly authorId!: string;

    @Field(() => Article, {
        nullable: true,
        description: undefined,
    })
    article?: Article | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    readonly articleId?: string | null;
}
