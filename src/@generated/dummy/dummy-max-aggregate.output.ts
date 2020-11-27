import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DummyMaxAggregate {
    @Field(() => String, {
        nullable: true,
    })
    decimal?: string;

    @Field(() => String, {
        nullable: true,
    })
    bigInt?: BigInt;
}
