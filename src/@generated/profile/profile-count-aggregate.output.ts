import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProfileCountAggregate {
    @Field(() => Int, { nullable: false })
    id!: number;

    @Field(() => Int, { nullable: false })
    userId!: number;

    @Field(() => Int, { nullable: false })
    dummy!: number;

    @Field(() => Int, { nullable: false })
    _all!: number;
}
