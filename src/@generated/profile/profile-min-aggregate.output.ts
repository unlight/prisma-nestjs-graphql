import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProfileMinAggregate {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => String, { nullable: true })
    userId?: string;

    @Field(() => String, { nullable: true })
    dummy?: string;
}
