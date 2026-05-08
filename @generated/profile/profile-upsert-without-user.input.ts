import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ProfileUpdateWithoutUserInput } from './profile-update-without-user.input.ts';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutUserInput } from './profile-create-without-user.input.ts';
import { ProfileWhereInput } from './profile-where.input.ts';

@InputType()
export class ProfileUpsertWithoutUserInput {
  @Field(() => ProfileUpdateWithoutUserInput, { nullable: false })
  @Type(() => ProfileUpdateWithoutUserInput)
  update!: Identity<ProfileUpdateWithoutUserInput>;

  @Field(() => ProfileCreateWithoutUserInput, { nullable: false })
  @Type(() => ProfileCreateWithoutUserInput)
  create!: Identity<ProfileCreateWithoutUserInput>;

  @Field(() => ProfileWhereInput, { nullable: true })
  @Type(() => ProfileWhereInput)
  where?: Identity<ProfileWhereInput>;
}
