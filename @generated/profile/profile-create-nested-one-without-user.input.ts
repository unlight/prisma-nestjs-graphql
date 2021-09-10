import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutUserInput } from './profile-create-without-user.input';
import { ProfileCreateOrConnectWithoutUserInput } from './profile-create-or-connect-without-user.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedOneWithoutUserInput {
    @Field(() => ProfileCreateWithoutUserInput, { nullable: true })
    create?: ProfileCreateWithoutUserInput;

    @Field(() => ProfileCreateOrConnectWithoutUserInput, { nullable: true })
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;

    @Field(() => ProfileWhereUniqueInput, { nullable: true })
    connect?: ProfileWhereUniqueInput;
}
