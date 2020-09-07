import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';
import { UserUpdateWithoutArticlesDataInput } from './user-update-without-articles-data.input';

@InputType()
export class UserUpsertWithoutArticlesInput {
    @Field(() => UserUpdateWithoutArticlesDataInput, {
        nullable: true,
        description: undefined,
    })
    update?: UserUpdateWithoutArticlesDataInput;

    @Field(() => UserCreateWithoutArticlesInput, {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutArticlesInput;
}
