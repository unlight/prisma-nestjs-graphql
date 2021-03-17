import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';
import { UserUpdateWithoutFavoriteArticlesInput } from './user-update-without-favorite-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput {
    @Field(() => UserWhereUniqueInput, { nullable: false })
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFavoriteArticlesInput, { nullable: false })
    update!: UserUpdateWithoutFavoriteArticlesInput;

    @Field(() => UserCreateWithoutFavoriteArticlesInput, { nullable: false })
    create!: UserCreateWithoutFavoriteArticlesInput;
}
