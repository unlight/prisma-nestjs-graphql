import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class Dummy {
    @Field(() => ID, {
        nullable: false,
    })
    id!: string;

    @Field(() => Float, {
        nullable: false,
    })
    floaty!: number;

    @Field(() => Int, {
        nullable: true,
    })
    int?: number;

    @Field(() => Float, {
        nullable: true,
    })
    float?: number;

    @Field(() => String, {
        nullable: true,
    })
    bytes?: Buffer;

    @Field(() => String, {
        nullable: true,
    })
    decimal?: number | string;

    @Field(() => String, {
        nullable: true,
    })
    bigInt?: bigint | number;

    @Field(() => GraphQLJSON, {
        nullable: true,
    })
    json?: any;
}
