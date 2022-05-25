import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileCreateInput } from './profile-create.input';
import { ProfileUpdateInput } from './profile-update.input';

@ArgsType()
export class UpsertOneProfileArgs {
  @Field(() => ProfileWhereUniqueInput, { nullable: false })
  @Type(() => ProfileWhereUniqueInput)
  where!: ProfileWhereUniqueInput;

  @Field(() => ProfileCreateInput, { nullable: false })
  @Type(() => ProfileCreateInput)
  create!: ProfileCreateInput;

  @Field(() => ProfileUpdateInput, { nullable: false })
  @Type(() => ProfileUpdateInput)
  update!: ProfileUpdateInput;
}
