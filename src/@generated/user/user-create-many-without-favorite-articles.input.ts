import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutfavoriteArticlesInput } from './user-create-or-connect-withoutfavorite-articles.input';
import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateManyWithoutFavoriteArticlesInput {
    @Field(() => [UserCreateWithoutFavoriteArticlesInput], {
        nullable: true,
    })
    create?: Array<UserCreateWithoutFavoriteArticlesInput>;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
    })
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserCreateOrConnectWithoutfavoriteArticlesInput], {
        nullable: true,
    })
    connectOrCreate?: Array<UserCreateOrConnectWithoutfavoriteArticlesInput>;
}
