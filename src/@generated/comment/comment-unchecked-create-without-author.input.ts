import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CommentUncheckedCreateWithoutAuthorInput {
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
        nullable: false,
    })
    body!: string;

    @Field(() => String, {
        nullable: true,
    })
    articleId?: string;
}
