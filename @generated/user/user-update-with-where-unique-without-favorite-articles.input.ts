import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFavoriteArticlesInput } from './user-update-without-favorite-articles.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput {
    @Field(() => UserWhereUniqueInput, { nullable: false })
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFavoriteArticlesInput, { nullable: false })
    data!: UserUpdateWithoutFavoriteArticlesInput;
}
