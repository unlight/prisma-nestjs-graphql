import { Field, GraphQLISODateTime, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UserDateInput {
    @Field(() => GraphQLISODateTime, {
        nullable: true,
    })
    date?: Date;
}
