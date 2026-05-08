import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ProfileWhereInput } from './profile-where.input.ts';
import { Type } from 'class-transformer';
import { ProfileUpdateWithoutUserInput } from './profile-update-without-user.input.ts';

@InputType()
export class ProfileUpdateToOneWithWhereWithoutUserInput {
  @Field(() => ProfileWhereInput, { nullable: true })
  @Type(() => ProfileWhereInput)
  where?: Identity<ProfileWhereInput>;

  @Field(() => ProfileUpdateWithoutUserInput, { nullable: false })
  @Type(() => ProfileUpdateWithoutUserInput)
  data!: Identity<ProfileUpdateWithoutUserInput>;
}
