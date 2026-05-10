import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProfileUpdateManyMutationInput {
  @Field(() => String, { nullable: true })
  dummy?: string;
}
