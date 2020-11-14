import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DummyMinAggregate {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    decimal?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    bigInt?: BigInt;
}
