import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';
import { UserUncheckedCreateWithoutArticlesInput } from './user-unchecked-create-without-articles.input';
import { UserUncheckedUpdateWithoutArticlesInput } from './user-unchecked-update-without-articles.input';
import { UserUpdateWithoutArticlesInput } from './user-update-without-articles.input';

@InputType()
export class UserUpsertWithoutArticlesInput {
    @Field(() => UserUpdateWithoutArticlesInput, {
        nullable: false,
    })
    update!: UserUpdateWithoutArticlesInput | UserUncheckedUpdateWithoutArticlesInput;

    @Field(() => UserCreateWithoutArticlesInput, {
        nullable: false,
    })
    create!: UserCreateWithoutArticlesInput | UserUncheckedCreateWithoutArticlesInput;
}
