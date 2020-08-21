import { InputType, Field } from '@nestjs/graphql';
import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput } from './user-update-with-where-unique-without-favorite-articles.input';
import { UserUpdateManyWithWhereNestedInput } from './user-update-many-with-where-nested.input';
import { UserScalarWhereInput } from './user-scalar-where.input';
import { UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput } from './user-upsert-with-where-unique-without-favorite-articles.input';

@InputType({})
export class UserUpdateManyWithoutFavoriteArticlesInput {
    @Field(() => [UserCreateWithoutFavoriteArticlesInput], {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutFavoriteArticlesInput[] | null;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: UserWhereUniqueInput[] | null;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    set?: UserWhereUniqueInput[] | null;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    disconnect?: UserWhereUniqueInput[] | null;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    delete?: UserWhereUniqueInput[] | null;

    @Field(() => [UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput], {
        nullable: true,
        description: undefined,
    })
    update?: UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput[] | null;

    @Field(() => [UserUpdateManyWithWhereNestedInput], {
        nullable: true,
        description: undefined,
    })
    updateMany?: UserUpdateManyWithWhereNestedInput[] | null;

    @Field(() => [UserScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    deleteMany?: UserScalarWhereInput[] | null;

    @Field(() => [UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput], {
        nullable: true,
        description: undefined,
    })
    upsert?: UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput[] | null;
}
