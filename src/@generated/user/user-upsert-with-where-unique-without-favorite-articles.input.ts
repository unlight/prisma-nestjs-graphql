import { InputType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFavoriteArticlesDataInput } from './user-update-without-favorite-articles-data.input';
import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';

@InputType({})
export class UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserWhereUniqueInput | null;

    @Field(() => UserUpdateWithoutFavoriteArticlesDataInput, {
        nullable: true,
        description: undefined,
    })
    update?: UserUpdateWithoutFavoriteArticlesDataInput | null;

    @Field(() => UserCreateWithoutFavoriteArticlesInput, {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutFavoriteArticlesInput | null;
}
