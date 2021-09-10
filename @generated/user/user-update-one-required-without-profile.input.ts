import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProfileInput } from './user-create-without-profile.input';
import { UserCreateOrConnectWithoutProfileInput } from './user-create-or-connect-without-profile.input';
import { UserUpsertWithoutProfileInput } from './user-upsert-without-profile.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutProfileInput } from './user-update-without-profile.input';

@InputType()
export class UserUpdateOneRequiredWithoutProfileInput {
    @Field(() => UserCreateWithoutProfileInput, { nullable: true })
    create?: UserCreateWithoutProfileInput;

    @Field(() => UserCreateOrConnectWithoutProfileInput, { nullable: true })
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput;

    @Field(() => UserUpsertWithoutProfileInput, { nullable: true })
    upsert?: UserUpsertWithoutProfileInput;

    @Field(() => UserWhereUniqueInput, { nullable: true })
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutProfileInput, { nullable: true })
    update?: UserUpdateWithoutProfileInput;
}
