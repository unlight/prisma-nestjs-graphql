import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input.ts';
import { StringFilter } from '../prisma/string-filter.input.ts';
import { UserWhereInput } from '../user/user-where.input.ts';
import { Type } from 'class-transformer';

@InputType()
export class ProfileWhereInput {
  @Field(() => [ProfileWhereInput], { nullable: true })
  AND?: Array<ProfileWhereInput>;

  @Field(() => [ProfileWhereInput], { nullable: true })
  OR?: Array<ProfileWhereInput>;

  @Field(() => [ProfileWhereInput], { nullable: true })
  NOT?: Array<ProfileWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: Identity<IntFilter>;

  @Field(() => StringFilter, { nullable: true })
  userId?: Identity<StringFilter>;

  @Field(() => StringFilter, { nullable: true })
  dummy?: Identity<StringFilter>;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  user?: Identity<UserWhereInput>;
}
