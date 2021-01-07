import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BatchPayload {
    @Field(() => Int, {
        nullable: false,
    })
    count!: number;
}
