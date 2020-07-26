import { InputType, Field } from '@nestjs/graphql';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutArticlesDataInput } from './user-update-without-articles-data.input';
import { UserUpsertWithoutArticlesInput } from './user-upsert-without-articles.input';

@InputType({})
export class UserUpdateOneRequiredWithoutArticlesInput {
    @Field(() => UserCreateWithoutArticlesInput, {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutArticlesInput | null;

    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    connect?: UserWhereUniqueInput | null;

    @Field(() => UserUpdateWithoutArticlesDataInput, {
        nullable: true,
        description: undefined,
    })
    update?: UserUpdateWithoutArticlesDataInput | null;

    @Field(() => UserUpsertWithoutArticlesInput, {
        nullable: true,
        description: undefined,
    })
    upsert?: UserUpsertWithoutArticlesInput | null;
}
