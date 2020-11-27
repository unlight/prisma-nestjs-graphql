import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DummyMinAggregate {
    @Field(() => String, {
        nullable: true,
    })
    decimal?: string;

    @Field(() => String, {
        nullable: true,
    })
    bigInt?: BigInt;
}
