import { Field, InputType } from '@nestjs/graphql';

import { UserUpdateWithoutFavoriteArticlesInput } from './user-update-without-favorite-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFavoriteArticlesInput, {
        nullable: true,
        description: undefined,
    })
    data?: UserUpdateWithoutFavoriteArticlesInput;
}
