import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DummyJsonType {
  @Field(() => String, { nullable: false })
  foo!: string;
}
