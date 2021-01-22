import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class DummyUncheckedCreateInput {
    @Field(() => String, {
        nullable: false,
    })
    id!: string;

    @Field(() => String, {
        nullable: true,
    })
    bytes?: Buffer;

    @Field(() => String, {
        nullable: true,
    })
    decimal?: string;

    @Field(() => String, {
        nullable: true,
    })
    bigInt?: BigInt;

    @Field(() => GraphQLJSON, {
        nullable: true,
    })
    json?: object;
}
