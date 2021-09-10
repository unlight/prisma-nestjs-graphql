import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutUserInput } from './profile-create-without-user.input';
import { ProfileCreateOrConnectWithoutUserInput } from './profile-create-or-connect-without-user.input';
import { ProfileUpsertWithoutUserInput } from './profile-upsert-without-user.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateWithoutUserInput } from './profile-update-without-user.input';

@InputType()
export class ProfileUpdateOneWithoutUserInput {
    @Field(() => ProfileCreateWithoutUserInput, { nullable: true })
    create?: ProfileCreateWithoutUserInput;

    @Field(() => ProfileCreateOrConnectWithoutUserInput, { nullable: true })
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;

    @Field(() => ProfileUpsertWithoutUserInput, { nullable: true })
    upsert?: ProfileUpsertWithoutUserInput;

    @Field(() => ProfileWhereUniqueInput, { nullable: true })
    connect?: ProfileWhereUniqueInput;

    @Field(() => Boolean, { nullable: true })
    disconnect?: boolean;

    @Field(() => Boolean, { nullable: true })
    delete?: boolean;

    @Field(() => ProfileUpdateWithoutUserInput, { nullable: true })
    update?: ProfileUpdateWithoutUserInput;
}
