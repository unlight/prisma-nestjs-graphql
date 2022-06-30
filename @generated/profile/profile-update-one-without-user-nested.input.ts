import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutUserInput } from './profile-create-without-user.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutUserInput } from './profile-create-or-connect-without-user.input';
import { ProfileUpsertWithoutUserInput } from './profile-upsert-without-user.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateWithoutUserInput } from './profile-update-without-user.input';

@InputType()
export class ProfileUpdateOneWithoutUserNestedInput {
  @Field(() => ProfileCreateWithoutUserInput, { nullable: true })
  @Type(() => ProfileCreateWithoutUserInput)
  create?: ProfileCreateWithoutUserInput;

  @Field(() => ProfileCreateOrConnectWithoutUserInput, { nullable: true })
  @Type(() => ProfileCreateOrConnectWithoutUserInput)
  connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;

  @Field(() => ProfileUpsertWithoutUserInput, { nullable: true })
  @Type(() => ProfileUpsertWithoutUserInput)
  upsert?: ProfileUpsertWithoutUserInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => ProfileWhereUniqueInput, { nullable: true })
  @Type(() => ProfileWhereUniqueInput)
  connect?: ProfileWhereUniqueInput;

  @Field(() => ProfileUpdateWithoutUserInput, { nullable: true })
  @Type(() => ProfileUpdateWithoutUserInput)
  update?: ProfileUpdateWithoutUserInput;
}
