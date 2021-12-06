import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';

@InputType()
export class UserCreateOrConnectWithoutFavoriteArticlesInput {
    @Field(() => UserWhereUniqueInput, { nullable: false })
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutFavoriteArticlesInput, { nullable: false })
    create!: UserCreateWithoutFavoriteArticlesInput;
}
