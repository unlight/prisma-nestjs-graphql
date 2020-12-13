import { Field, Float, InputType, Int } from '@nestjs/graphql';

import { Role } from '../prisma/role.enum';

@InputType()
export class UserUpdateManyMutationInput {
  @Field(() => String, {
    nullable: true,
  })
  id?: string;

  @Field(() => String, {
    nullable: true,
  })
  email?: string;

  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @Field(() => String, {
    nullable: true,
  })
  bio?: string;

  @Field(() => String, {
    nullable: true,
  })
  image?: string;

  @Field(() => Int, {
    nullable: true,
  })
  countComments?: number;

  @Field(() => Float, {
    nullable: true,
  })
  rating?: number;

  @Field(() => Role, {
    nullable: true,
  })
  role?: Role;
}
