import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CommentUncheckedUpdateManyInput {
    @Field(() => String, {
        nullable: true,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
    })
    createdAt?: Date | string;

    @Field(() => String, {
        nullable: true,
    })
    updatedAt?: Date | string;

    @Field(() => String, {
        nullable: true,
    })
    body?: string;

    @Field(() => String, {
        nullable: true,
    })
    authorId?: string;

    @Field(() => String, {
        nullable: true,
    })
    articleId?: string;
}
