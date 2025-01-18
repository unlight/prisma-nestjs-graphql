import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NestedBytesNullableFilter {
  @Field(() => String, { nullable: true })
  equals?: Uint8Array;

  @Field(() => [String], { nullable: true })
  in?: Array<Uint8Array>;

  @Field(() => [String], { nullable: true })
  notIn?: Array<Uint8Array>;

  @Field(() => NestedBytesNullableFilter, { nullable: true })
  not?: NestedBytesNullableFilter;
}
