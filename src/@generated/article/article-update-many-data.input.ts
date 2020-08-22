import { Field, InputType, Int } from '@nestjs/graphql';

@InputType({})
export class ArticleUpdateManyDataInput {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    id?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    slug?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    title?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    description?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    body?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    createdAt?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    updatedAt?: string | null;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    favoritesCount?: number | null;

    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    active?: boolean | null;
}
