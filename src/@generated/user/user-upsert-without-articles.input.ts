import { InputType, Field } from '@nestjs/graphql';
import { UserUpdateWithoutArticlesDataInput } from './user-update-without-articles-data.input';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';

@InputType({})
export class UserUpsertWithoutArticlesInput {
    @Field(() => UserUpdateWithoutArticlesDataInput, {
        nullable: true,
        description: undefined,
    })
    update?: UserUpdateWithoutArticlesDataInput | null;

    @Field(() => UserCreateWithoutArticlesInput, {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutArticlesInput | null;
}
