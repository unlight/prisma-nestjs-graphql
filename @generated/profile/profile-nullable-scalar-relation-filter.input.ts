import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ProfileWhereInput } from './profile-where.input.ts';

@InputType()
export class ProfileNullableScalarRelationFilter {
  @Field(() => ProfileWhereInput, { nullable: true })
  is?: Identity<ProfileWhereInput>;

  @Field(() => ProfileWhereInput, { nullable: true })
  isNot?: Identity<ProfileWhereInput>;
}
