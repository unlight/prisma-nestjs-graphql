import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutUserInput } from './profile-create-without-user.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutUserInput } from './profile-create-or-connect-without-user.input';
import { HideField } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileUncheckedCreateNestedOneWithoutUserInput {
  @Field(() => ProfileCreateWithoutUserInput, { nullable: true })
  @Type(() => ProfileCreateWithoutUserInput)
  create?: ProfileCreateWithoutUserInput;

  @HideField()
  connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;

  @HideField()
  connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;
}
