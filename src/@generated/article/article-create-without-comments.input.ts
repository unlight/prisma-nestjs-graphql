import { Field, InputType, Int } from '@nestjs/graphql';

import { TagCreateNestedManyWithoutArticlesInput } from '../tag/tag-create-nested-many-without-articles.input';
import { UserCreateNestedManyWithoutFavoriteArticlesInput } from '../user/user-create-nested-many-without-favorite-articles.input';
import { UserCreateNestedOneWithoutArticlesInput } from '../user/user-create-nested-one-without-articles.input';

@InputType()
export class ArticleCreateWithoutCommentsInput {
    @Field(() => String, { nullable: true })
    id?: string;

    @Field(() => String, { nullable: false })
    slug!: string;

    @Field(() => String, { nullable: false })
    title!: string;

    @Field(() => String, { nullable: false })
    description!: string;

    @Field(() => String, { nullable: false })
    body!: string;

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string;

    @Field(() => Int, { nullable: true })
    favoritesCount?: number;

    @Field(() => Boolean, { nullable: true })
    active?: boolean;

    @Field(() => TagCreateNestedManyWithoutArticlesInput, { nullable: true })
    tags?: TagCreateNestedManyWithoutArticlesInput;

    @Field(() => UserCreateNestedOneWithoutArticlesInput, { nullable: false })
    author!: UserCreateNestedOneWithoutArticlesInput;

    @Field(() => UserCreateNestedManyWithoutFavoriteArticlesInput, { nullable: true })
    favoritedBy?: UserCreateNestedManyWithoutFavoriteArticlesInput;
}
