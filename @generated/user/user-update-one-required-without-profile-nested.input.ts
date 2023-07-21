import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProfileInput } from './user-create-without-profile.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProfileInput } from './user-create-or-connect-without-profile.input';
import { UserUpsertWithoutProfileInput } from './user-upsert-without-profile.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutProfileInput } from './user-update-to-one-with-where-without-profile.input';

@InputType()
export class UserUpdateOneRequiredWithoutProfileNestedInput {
  @Field(() => UserCreateWithoutProfileInput, { nullable: true })
  @Type(() => UserCreateWithoutProfileInput)
  create?: UserCreateWithoutProfileInput;

  @Field(() => UserCreateOrConnectWithoutProfileInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutProfileInput)
  connectOrCreate?: UserCreateOrConnectWithoutProfileInput;

  @Field(() => UserUpsertWithoutProfileInput, { nullable: true })
  @Type(() => UserUpsertWithoutProfileInput)
  upsert?: UserUpsertWithoutProfileInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: UserWhereUniqueInput;

  @Field(() => UserUpdateToOneWithWhereWithoutProfileInput, { nullable: true })
  @Type(() => UserUpdateToOneWithWhereWithoutProfileInput)
  update?: UserUpdateToOneWithWhereWithoutProfileInput;
}
