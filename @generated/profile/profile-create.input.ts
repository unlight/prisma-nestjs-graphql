import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutProfileInput } from '../user/user-create-nested-one-without-profile.input';

@InputType()
export class ProfileCreateInput {
    @Field(() => UserCreateNestedOneWithoutProfileInput, { nullable: false })
    user!: UserCreateNestedOneWithoutProfileInput;

    @Field(() => String, { nullable: true })
    dummy?: string;
}
