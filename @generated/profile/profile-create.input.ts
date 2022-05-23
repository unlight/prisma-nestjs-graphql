import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutProfileInput } from '../user/user-create-nested-one-without-profile.input';
import { Type } from 'class-transformer';

@InputType()
export class ProfileCreateInput {
  @Field(() => UserCreateNestedOneWithoutProfileInput, { nullable: false })
  @Type(() => UserCreateNestedOneWithoutProfileInput)
  user!: UserCreateNestedOneWithoutProfileInput;

  @Field(() => String, { nullable: true })
  dummy?: string;
}
