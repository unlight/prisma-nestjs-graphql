import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from './role.enum.ts';
import type { Identity } from 'identity-type';
import { IntFilter } from './int-filter.input.ts';
import { EnumRoleFilter } from './enum-role-filter.input.ts';

@InputType()
export class EnumRoleWithAggregatesFilter {
  @Field(() => Role, { nullable: true })
  equals?: `${Role}`;

  @Field(() => [Role], { nullable: true })
  in?: Array<`${Role}`>;

  @Field(() => [Role], { nullable: true })
  notIn?: Array<`${Role}`>;

  @Field(() => EnumRoleWithAggregatesFilter, { nullable: true })
  not?: Identity<EnumRoleWithAggregatesFilter>;

  @Field(() => IntFilter, { nullable: true })
  _count?: Identity<IntFilter>;

  @Field(() => EnumRoleFilter, { nullable: true })
  _min?: Identity<EnumRoleFilter>;

  @Field(() => EnumRoleFilter, { nullable: true })
  _max?: Identity<EnumRoleFilter>;
}
