import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateOrConnectWithoutarticlesInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutArticlesInput, {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutArticlesInput;
}
