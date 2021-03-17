import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CommentCountAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true;

    @Field(() => Boolean, { nullable: true })
    createdAt?: true;

    @Field(() => Boolean, { nullable: true })
    updatedAt?: true;

    @Field(() => Boolean, { nullable: true })
    body?: true;

    @Field(() => Boolean, { nullable: true })
    authorId?: true;

    @Field(() => Boolean, { nullable: true })
    articleId?: true;

    @Field(() => Boolean, { nullable: true })
    _all?: true;
}
