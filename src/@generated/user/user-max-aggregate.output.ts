import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserMaxAggregate {
    @Field(() => Int, {
        nullable: true,
    })
    countComments?: number;

    @Field(() => Float, {
        nullable: true,
    })
    rating?: number;
}
