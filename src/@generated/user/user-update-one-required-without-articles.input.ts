import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutarticlesInput } from './user-create-or-connect-withoutarticles.input';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';
import { UserUpdateWithoutArticlesInput } from './user-update-without-articles.input';
import { UserUpsertWithoutArticlesInput } from './user-upsert-without-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpdateOneRequiredWithoutArticlesInput {
    @Field(() => UserCreateWithoutArticlesInput, {
        nullable: true,
    })
    create?: UserCreateWithoutArticlesInput;

    @Field(() => UserCreateOrConnectWithoutarticlesInput, {
        nullable: true,
    })
    connectOrCreate?: UserCreateOrConnectWithoutarticlesInput;

    @Field(() => UserUpsertWithoutArticlesInput, {
        nullable: true,
    })
    upsert?: UserUpsertWithoutArticlesInput;

    @Field(() => UserWhereUniqueInput, {
        nullable: true,
    })
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutArticlesInput, {
        nullable: true,
    })
    update?: UserUpdateWithoutArticlesInput;
}
