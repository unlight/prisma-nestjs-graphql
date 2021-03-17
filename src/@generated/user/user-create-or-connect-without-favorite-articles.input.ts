import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateOrConnectWithoutFavoriteArticlesInput {
    @Field(() => UserWhereUniqueInput, { nullable: false })
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutFavoriteArticlesInput, { nullable: false })
    create!: UserCreateWithoutFavoriteArticlesInput;
}
