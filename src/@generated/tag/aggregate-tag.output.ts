import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AggregateTag {
    @Field(() => Int, {
        nullable: true,
    })
    count?: number;
}
