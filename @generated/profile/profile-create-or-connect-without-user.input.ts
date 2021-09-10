import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileCreateWithoutUserInput } from './profile-create-without-user.input';

@InputType()
export class ProfileCreateOrConnectWithoutUserInput {
    @Field(() => ProfileWhereUniqueInput, { nullable: false })
    where!: ProfileWhereUniqueInput;

    @Field(() => ProfileCreateWithoutUserInput, { nullable: false })
    create!: ProfileCreateWithoutUserInput;
}
