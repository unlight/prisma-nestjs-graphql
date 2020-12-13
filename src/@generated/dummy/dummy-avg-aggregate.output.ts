import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DummyAvgAggregate {
  @Field(() => String, {
    nullable: true,
  })
  decimal?: string;

  @Field(() => Float, {
    nullable: true,
  })
  bigInt?: number;
}
