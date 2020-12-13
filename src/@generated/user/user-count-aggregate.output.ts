import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {
  @Field(() => Int, {
    nullable: true,
  })
  id?: number;

  @Field(() => Int, {
    nullable: true,
  })
  email?: number;

  @Field(() => Int, {
    nullable: true,
  })
  name?: number;

  @Field(() => Int, {
    nullable: true,
  })
  password?: number;

  @Field(() => Int, {
    nullable: true,
  })
  bio?: number;

  @Field(() => Int, {
    nullable: true,
  })
  image?: number;

  @Field(() => Int, {
    nullable: true,
  })
  countComments?: number;

  @Field(() => Int, {
    nullable: true,
  })
  rating?: number;

  @Field(() => Int, {
    nullable: true,
  })
  role?: number;

  @Field(() => Int, {
    nullable: true,
  })
  _all?: number;
}
