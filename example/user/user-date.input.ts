import { Field, GraphQLISODateTime, InputType } from '@nestjs/graphql';

@InputType()
export class UserDateInput {
  @Field(() => GraphQLISODateTime, {
    nullable: true,
  })
  date?: Date;
}
