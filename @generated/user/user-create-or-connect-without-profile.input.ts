import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProfileInput } from './user-create-without-profile.input';

@InputType()
export class UserCreateOrConnectWithoutProfileInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutProfileInput, { nullable: false })
  @Type(() => UserCreateWithoutProfileInput)
  create!: UserCreateWithoutProfileInput;
}
