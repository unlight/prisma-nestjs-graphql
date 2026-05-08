import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { UserUpdateManyMutationInput } from './user-update-many-mutation.input.ts';
import { Type } from 'class-transformer';
import { UserWhereInput } from './user-where.input.ts';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyUserArgs {
  @Field(() => UserUpdateManyMutationInput, { nullable: false })
  @Type(() => UserUpdateManyMutationInput)
  data!: Identity<UserUpdateManyMutationInput>;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: Identity<UserWhereInput>;

  @Field(() => Int, { nullable: true })
  limit?: number;
}
