import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { UserWhereInput } from './user-where.input.ts';
import { Type } from 'class-transformer';
import { UserUpdateWithoutProfileInput } from './user-update-without-profile.input.ts';

@InputType()
export class UserUpdateToOneWithWhereWithoutProfileInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: Identity<UserWhereInput>;

  @Field(() => UserUpdateWithoutProfileInput, { nullable: false })
  @Type(() => UserUpdateWithoutProfileInput)
  data!: Identity<UserUpdateWithoutProfileInput>;
}
