import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutUserInput } from './profile-create-without-user.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutUserInput } from './profile-create-or-connect-without-user.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedOneWithoutUserInput {
  @Field(() => ProfileCreateWithoutUserInput, { nullable: true })
  @Type(() => ProfileCreateWithoutUserInput)
  create?: ProfileCreateWithoutUserInput;

  @Field(() => ProfileCreateOrConnectWithoutUserInput, { nullable: true })
  @Type(() => ProfileCreateOrConnectWithoutUserInput)
  connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;

  @Field(() => ProfileWhereUniqueInput, { nullable: true })
  @Type(() => ProfileWhereUniqueInput)
  connect?: ProfileWhereUniqueInput;
}
