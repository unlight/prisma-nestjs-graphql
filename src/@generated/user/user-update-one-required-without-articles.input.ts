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
        description: undefined,
    })
    create?: UserCreateWithoutArticlesInput;

    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutArticlesInput, {
        nullable: true,
        description: undefined,
    })
    update?: UserUpdateWithoutArticlesInput;

    @Field(() => UserUpsertWithoutArticlesInput, {
        nullable: true,
        description: undefined,
    })
    upsert?: UserUpsertWithoutArticlesInput;

    @Field(() => UserCreateOrConnectWithoutarticlesInput, {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?: UserCreateOrConnectWithoutarticlesInput;
}
