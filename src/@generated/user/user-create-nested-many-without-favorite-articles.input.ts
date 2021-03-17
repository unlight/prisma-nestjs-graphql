import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutFavoriteArticlesInput } from './user-create-or-connect-without-favorite-articles.input';
import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutFavoriteArticlesInput {
    @Field(() => [UserCreateWithoutFavoriteArticlesInput], { nullable: true })
    create?: Array<UserCreateWithoutFavoriteArticlesInput>;

    @Field(() => [UserCreateOrConnectWithoutFavoriteArticlesInput], { nullable: true })
    connectOrCreate?: Array<UserCreateOrConnectWithoutFavoriteArticlesInput>;

    @Field(() => [UserWhereUniqueInput], { nullable: true })
    connect?: Array<UserWhereUniqueInput>;
}
