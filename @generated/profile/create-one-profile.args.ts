import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProfileCreateInput } from './profile-create.input.ts';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProfileArgs {
  @Field(() => ProfileCreateInput, { nullable: false })
  @Type(() => ProfileCreateInput)
  data!: ProfileCreateInput;
}
