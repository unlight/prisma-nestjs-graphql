import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutFavoriteArticlesInput } from './user-create-or-connect-without-favorite-articles.input';
import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';
import { UserScalarWhereInput } from './user-scalar-where.input';
import { UserUpdateManyWithWhereWithoutFavoriteArticlesInput } from './user-update-many-with-where-without-favorite-articles.input';
import { UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput } from './user-update-with-where-unique-without-favorite-articles.input';
import { UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput } from './user-upsert-with-where-unique-without-favorite-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpdateManyWithoutFavoriteArticlesInput {
    @Field(() => [UserCreateWithoutFavoriteArticlesInput], { nullable: true })
    create?: Array<UserCreateWithoutFavoriteArticlesInput>;

    @Field(() => [UserCreateOrConnectWithoutFavoriteArticlesInput], { nullable: true })
    connectOrCreate?: Array<UserCreateOrConnectWithoutFavoriteArticlesInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput], {
        nullable: true,
    })
    upsert?: Array<UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput>;

    @Field(() => [UserWhereUniqueInput], { nullable: true })
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], { nullable: true })
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], { nullable: true })
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], { nullable: true })
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput], {
        nullable: true,
    })
    update?: Array<UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutFavoriteArticlesInput], {
        nullable: true,
    })
    updateMany?: Array<UserUpdateManyWithWhereWithoutFavoriteArticlesInput>;

    @Field(() => [UserScalarWhereInput], { nullable: true })
    deleteMany?: Array<UserScalarWhereInput>;
}
