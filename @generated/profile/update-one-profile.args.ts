import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ProfileUpdateInput } from './profile-update.input.ts';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input.ts';

@ArgsType()
export class UpdateOneProfileArgs {
  @Field(() => ProfileUpdateInput, { nullable: false })
  @Type(() => ProfileUpdateInput)
  data!: Identity<ProfileUpdateInput>;

  @Field(() => ProfileWhereUniqueInput, { nullable: false })
  @Type(() => ProfileWhereUniqueInput)
  where!: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;
}
