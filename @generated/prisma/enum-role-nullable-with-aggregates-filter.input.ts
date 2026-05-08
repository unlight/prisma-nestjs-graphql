import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from './role.enum.ts';
import type { Identity } from 'identity-type';
import { NestedEnumRoleNullableWithAggregatesFilter } from './nested-enum-role-nullable-with-aggregates-filter.input.ts';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input.ts';
import { NestedEnumRoleNullableFilter } from './nested-enum-role-nullable-filter.input.ts';

@InputType()
export class EnumRoleNullableWithAggregatesFilter {
  @Field(() => Role, { nullable: true })
  equals?: `${Role}`;

  @Field(() => [Role], { nullable: true })
  in?: Array<`${Role}`>;

  @Field(() => [Role], { nullable: true })
  notIn?: Array<`${Role}`>;

  @Field(() => NestedEnumRoleNullableWithAggregatesFilter, { nullable: true })
  not?: Identity<NestedEnumRoleNullableWithAggregatesFilter>;

  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: Identity<NestedIntNullableFilter>;

  @Field(() => NestedEnumRoleNullableFilter, { nullable: true })
  _min?: Identity<NestedEnumRoleNullableFilter>;

  @Field(() => NestedEnumRoleNullableFilter, { nullable: true })
  _max?: Identity<NestedEnumRoleNullableFilter>;
}
