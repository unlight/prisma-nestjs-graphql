import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';
import { UserUpdateWithoutArticlesInput } from './user-update-without-articles.input';

@InputType()
export class UserUpsertWithoutArticlesInput {
    @Field(() => UserUpdateWithoutArticlesInput, {
        nullable: true,
    })
    update?: UserUpdateWithoutArticlesInput;

    @Field(() => UserCreateWithoutArticlesInput, {
        nullable: true,
    })
    create?: UserCreateWithoutArticlesInput;
}
