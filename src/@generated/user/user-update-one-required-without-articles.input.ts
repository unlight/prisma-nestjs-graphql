import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';
import { UserUpdateWithoutArticlesDataInput } from './user-update-without-articles-data.input';
import { UserUpsertWithoutArticlesInput } from './user-upsert-without-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType({})
export class UserUpdateOneRequiredWithoutArticlesInput {
    @Field(() => UserCreateWithoutArticlesInput, {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutArticlesInput;

    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutArticlesDataInput, {
        nullable: true,
        description: undefined,
    })
    update?: UserUpdateWithoutArticlesDataInput;

    @Field(() => UserUpsertWithoutArticlesInput, {
        nullable: true,
        description: undefined,
    })
    upsert?: UserUpsertWithoutArticlesInput;
}
