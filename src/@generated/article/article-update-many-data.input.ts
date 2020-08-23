import { Field, InputType, Int } from '@nestjs/graphql';

@InputType({})
export class ArticleUpdateManyDataInput {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    slug?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    title?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    description?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    body?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    createdAt?: Date | string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    updatedAt?: Date | string;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    favoritesCount?: number;

    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    active?: boolean | null;
}
