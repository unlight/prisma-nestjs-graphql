import { Field, InputType } from '@nestjs/graphql';

import { UserUpdateWithoutFavoriteArticlesInput } from './user-update-without-favorite-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput {
    @Field(() => UserWhereUniqueInput, { nullable: false })
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFavoriteArticlesInput, { nullable: false })
    data!: UserUpdateWithoutFavoriteArticlesInput;
}
