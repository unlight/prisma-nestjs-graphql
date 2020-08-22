import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType({})
export class UserCreateManyWithoutFavoriteArticlesInput {
    @Field(() => [UserCreateWithoutFavoriteArticlesInput], {
        nullable: true,
        description: undefined,
    })
    create?:
        | UserCreateWithoutFavoriteArticlesInput
        | UserCreateWithoutFavoriteArticlesInput[]
        | null;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[] | null;
}
