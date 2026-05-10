import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from './role.enum.ts';
import type { Identity } from 'identity-type';

@InputType()
export class EnumRoleFilter {
  @Field(() => Role, { nullable: true })
  equals?: `${Role}`;

  @Field(() => [Role], { nullable: true })
  in?: Array<`${Role}`>;

  @Field(() => [Role], { nullable: true })
  notIn?: Array<`${Role}`>;

  @Field(() => EnumRoleFilter, { nullable: true })
  not?: Identity<EnumRoleFilter>;
}
