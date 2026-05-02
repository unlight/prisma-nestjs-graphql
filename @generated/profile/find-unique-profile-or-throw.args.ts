import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input.ts';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueProfileOrThrowArgs {
  @Field(() => ProfileWhereUniqueInput, { nullable: false })
  @Type(() => ProfileWhereUniqueInput)
  where!: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;
}
