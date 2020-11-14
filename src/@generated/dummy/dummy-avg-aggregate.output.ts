import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DummyAvgAggregate {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    decimal?: string;

    @Field(() => Float, {
        nullable: true,
        description: undefined,
    })
    bigInt?: number;
}
