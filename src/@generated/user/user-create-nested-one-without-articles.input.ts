import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutArticlesInput } from './user-create-or-connect-without-articles.input';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutArticlesInput {
    @Field(() => UserCreateWithoutArticlesInput, { nullable: true })
    create?: UserCreateWithoutArticlesInput;

    @Field(() => UserCreateOrConnectWithoutArticlesInput, { nullable: true })
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput;

    @Field(() => UserWhereUniqueInput, { nullable: true })
    connect?: UserWhereUniqueInput;
}
