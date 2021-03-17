import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CommentCountAggregate {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => Int, { nullable: true })
    createdAt?: number;

    @Field(() => Int, { nullable: true })
    updatedAt?: number;

    @Field(() => Int, { nullable: true })
    body?: number;

    @Field(() => Int, { nullable: true })
    authorId?: number;

    @Field(() => Int, { nullable: true })
    articleId?: number;

    @Field(() => Int, { nullable: false })
    _all!: number;
}
