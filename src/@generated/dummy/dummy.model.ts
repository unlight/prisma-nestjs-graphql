import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType({
    description: undefined,
})
export class Dummy {
    @Field(() => ID, {
        nullable: false,
        description: undefined,
    })
    id!: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    bytes?: Buffer;

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

    @Field(() => GraphQLJSON, {
        nullable: true,
        description: undefined,
    })
    json?: object;
}
