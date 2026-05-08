import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';

@InputType()
export class NestedBoolNullableFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;

  @Field(() => NestedBoolNullableFilter, { nullable: true })
  not?: Identity<NestedBoolNullableFilter>;
}
