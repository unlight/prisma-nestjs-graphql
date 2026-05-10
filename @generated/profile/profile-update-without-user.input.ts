import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProfileUpdateWithoutUserInput {
  @Field(() => String, { nullable: true })
  dummy?: string;
}
