import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';

@InputType()
export class UserCreateOrConnectWithoutArticlesInput {
    @Field(() => UserWhereUniqueInput, { nullable: false })
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutArticlesInput, { nullable: false })
    create!: UserCreateWithoutArticlesInput;
}
