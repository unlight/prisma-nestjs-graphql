import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateOrConnectWithoutarticlesInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutArticlesInput, {
        nullable: true,
    })
    create?: UserCreateWithoutArticlesInput;
}
