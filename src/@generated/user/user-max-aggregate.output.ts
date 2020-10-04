import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserMaxAggregate {
    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    countComments?: number;

    @Field(() => Float, {
        nullable: true,
        description: undefined,
    })
    rating?: number;
}
