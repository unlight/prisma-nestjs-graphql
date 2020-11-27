import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class DummyCreateInput {
    @Field(() => String, {
        nullable: true,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
    })
    bytes?: Buffer | null;

    @Field(() => String, {
        nullable: true,
    })
    decimal?: string | null;

    @Field(() => String, {
        nullable: true,
    })
    bigInt?: BigInt | null;

    @Field(() => GraphQLJSON, {
        nullable: true,
    })
    json?: object;
}
