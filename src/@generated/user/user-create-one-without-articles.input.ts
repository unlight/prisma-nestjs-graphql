import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutarticlesInput } from './user-create-or-connect-withoutarticles.input';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateOneWithoutArticlesInput {
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

    @Field(() => UserCreateOrConnectWithoutarticlesInput, {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?: UserCreateOrConnectWithoutarticlesInput;
}
