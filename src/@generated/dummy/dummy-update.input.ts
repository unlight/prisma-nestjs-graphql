import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class DummyUpdateInput {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    bytes?: Buffer | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    decimal?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    bigInt?: BigInt | null;

    @Field(() => GraphQLJSON, {
        nullable: true,
        description: undefined,
    })
    json?: object | null;
}
