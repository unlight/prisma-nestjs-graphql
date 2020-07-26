import { InputType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFavoriteArticlesDataInput } from './user-update-without-favorite-articles-data.input';

@InputType({})
export class UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserWhereUniqueInput | null;

    @Field(() => UserUpdateWithoutFavoriteArticlesDataInput, {
        nullable: true,
        description: undefined,
    })
    data?: UserUpdateWithoutFavoriteArticlesDataInput | null;
}
