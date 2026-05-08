import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ProfileUpdateManyMutationInput } from './profile-update-many-mutation.input.ts';
import { Type } from 'class-transformer';
import { ProfileWhereInput } from './profile-where.input.ts';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyProfileArgs {
  @Field(() => ProfileUpdateManyMutationInput, { nullable: false })
  @Type(() => ProfileUpdateManyMutationInput)
  data!: Identity<ProfileUpdateManyMutationInput>;

  @Field(() => ProfileWhereInput, { nullable: true })
  @Type(() => ProfileWhereInput)
  where?: Identity<ProfileWhereInput>;

  @Field(() => Int, { nullable: true })
  limit?: number;
}
