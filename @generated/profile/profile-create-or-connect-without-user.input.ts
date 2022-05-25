import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutUserInput } from './profile-create-without-user.input';

@InputType()
export class ProfileCreateOrConnectWithoutUserInput {
  @Field(() => ProfileWhereUniqueInput, { nullable: false })
  @Type(() => ProfileWhereUniqueInput)
  where!: ProfileWhereUniqueInput;

  @Field(() => ProfileCreateWithoutUserInput, { nullable: false })
  @Type(() => ProfileCreateWithoutUserInput)
  create!: ProfileCreateWithoutUserInput;
}
