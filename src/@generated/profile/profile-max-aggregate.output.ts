import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProfileMaxAggregate {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => String, { nullable: true })
    userId?: string;

    @Field(() => String, { nullable: true })
    dummy?: string;
}
