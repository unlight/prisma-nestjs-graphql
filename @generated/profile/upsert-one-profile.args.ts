import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input.ts';
import { Type } from 'class-transformer';
import { ProfileCreateInput } from './profile-create.input.ts';
import { ProfileUpdateInput } from './profile-update.input.ts';

@ArgsType()
export class UpsertOneProfileArgs {
  @Field(() => ProfileWhereUniqueInput, { nullable: false })
  @Type(() => ProfileWhereUniqueInput)
  where!: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;

  @Field(() => ProfileCreateInput, { nullable: false })
  @Type(() => ProfileCreateInput)
  create!: ProfileCreateInput;

  @Field(() => ProfileUpdateInput, { nullable: false })
  @Type(() => ProfileUpdateInput)
  update!: ProfileUpdateInput;
}
