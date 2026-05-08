import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ProfileCreateWithoutUserInput } from './profile-create-without-user.input.ts';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutUserInput } from './profile-create-or-connect-without-user.input.ts';
import { ProfileUpsertWithoutUserInput } from './profile-upsert-without-user.input.ts';
import { ProfileWhereInput } from './profile-where.input.ts';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input.ts';
import { ProfileUpdateToOneWithWhereWithoutUserInput } from './profile-update-to-one-with-where-without-user.input.ts';

@InputType()
export class ProfileUncheckedUpdateOneWithoutUserNestedInput {
  @Field(() => ProfileCreateWithoutUserInput, { nullable: true })
  @Type(() => ProfileCreateWithoutUserInput)
  create?: Identity<ProfileCreateWithoutUserInput>;

  @Field(() => ProfileCreateOrConnectWithoutUserInput, { nullable: true })
  @Type(() => ProfileCreateOrConnectWithoutUserInput)
  connectOrCreate?: Identity<ProfileCreateOrConnectWithoutUserInput>;

  @Field(() => ProfileUpsertWithoutUserInput, { nullable: true })
  @Type(() => ProfileUpsertWithoutUserInput)
  upsert?: Identity<ProfileUpsertWithoutUserInput>;

  @Field(() => ProfileWhereInput, { nullable: true })
  @Type(() => ProfileWhereInput)
  disconnect?: Identity<ProfileWhereInput>;

  @Field(() => ProfileWhereInput, { nullable: true })
  @Type(() => ProfileWhereInput)
  delete?: Identity<ProfileWhereInput>;

  @Field(() => ProfileWhereUniqueInput, { nullable: true })
  @Type(() => ProfileWhereUniqueInput)
  connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;

  @Field(() => ProfileUpdateToOneWithWhereWithoutUserInput, { nullable: true })
  @Type(() => ProfileUpdateToOneWithWhereWithoutUserInput)
  update?: Identity<ProfileUpdateToOneWithWhereWithoutUserInput>;
}
