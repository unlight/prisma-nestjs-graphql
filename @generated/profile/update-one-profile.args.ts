import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProfileUpdateInput } from './profile-update.input';
import { Type } from 'class-transformer';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@ArgsType()
export class UpdateOneProfileArgs {
  @Field(() => ProfileUpdateInput, { nullable: false })
  @Type(() => ProfileUpdateInput)
  data!: ProfileUpdateInput;

  @Field(() => ProfileWhereUniqueInput, { nullable: false })
  @Type(() => ProfileWhereUniqueInput)
  where!: ProfileWhereUniqueInput;
}
