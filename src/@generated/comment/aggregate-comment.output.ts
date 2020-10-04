import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AggregateComment {
    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    count?: number;
}
