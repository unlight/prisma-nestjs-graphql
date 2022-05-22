import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProfileCreateManyInput } from './profile-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProfileArgs {
  @Field(() => [ProfileCreateManyInput], { nullable: false })
  @Type(() => ProfileCreateManyInput)
  data!: Array<ProfileCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
