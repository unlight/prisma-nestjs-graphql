import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class DummyMinAggregate {
  @Field(() => String, {
    nullable: true,
  })
  id?: string;

  @Field(() => String, {
    nullable: true,
  })
  bytes?: Buffer;

  @Field(() => String, {
    nullable: true,
  })
  decimal?: string;

  @Field(() => String, {
    nullable: true,
  })
  bigInt?: BigInt;

  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  json?: object;
}
