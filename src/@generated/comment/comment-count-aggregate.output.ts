import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CommentCountAggregate {
    @Field(() => Int, { nullable: false })
    id!: number;

    @Field(() => Int, { nullable: false })
    createdAt!: number;

    @Field(() => Int, { nullable: false })
    updatedAt!: number;

    @Field(() => Int, { nullable: false })
    body!: number;

    @Field(() => Int, { nullable: false })
    authorId!: number;

    @Field(() => Int, { nullable: false })
    articleId!: number;

    @Field(() => Int, { nullable: false })
    _all!: number;
}
