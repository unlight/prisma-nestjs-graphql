import { Field, InputType } from '@nestjs/graphql';

import { UserUpdateWithoutFavoriteArticlesDataInput } from './user-update-without-favorite-articles-data.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFavoriteArticlesDataInput, {
        nullable: true,
        description: undefined,
    })
    data?: UserUpdateWithoutFavoriteArticlesDataInput;
}
