import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DummyCountAggregate {
  @Field(() => Int, {
    nullable: true,
  })
  id?: number;

  @Field(() => Int, {
    nullable: true,
  })
  bytes?: number;

  @Field(() => Int, {
    nullable: true,
  })
  decimal?: number;

  @Field(() => Int, {
    nullable: true,
  })
  bigInt?: number;

  @Field(() => Int, {
    nullable: true,
  })
  json?: number;

  @Field(() => Int, {
    nullable: true,
  })
  _all?: number;
}
