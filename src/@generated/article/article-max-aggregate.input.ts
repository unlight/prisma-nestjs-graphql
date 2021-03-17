import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ArticleMaxAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true;

    @Field(() => Boolean, { nullable: true })
    slug?: true;

    @Field(() => Boolean, { nullable: true })
    title?: true;

    @Field(() => Boolean, { nullable: true })
    description?: true;

    @Field(() => Boolean, { nullable: true })
    body?: true;

    @Field(() => Boolean, { nullable: true })
    createdAt?: true;

    @Field(() => Boolean, { nullable: true })
    updatedAt?: true;

    @Field(() => Boolean, { nullable: true })
    favoritesCount?: true;

    @Field(() => Boolean, { nullable: true })
    authorId?: true;

    @Field(() => Boolean, { nullable: true })
    active?: true;
}
