import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class DummyCreateManyInput {
    @Field(() => String, { nullable: false })
    id!: string;

    @Field(() => Float, { nullable: false })
    floaty!: number;

    @Field(() => Int, { nullable: true })
    int?: number;

    @Field(() => Float, { nullable: true })
    float?: number;

    @Field(() => String, { nullable: true })
    bytes?: Buffer;

    @Field(() => String, { nullable: true })
    decimal?: number | string;

    @Field(() => String, { nullable: true })
    bigInt?: bigint | number;

    @Field(() => GraphQLJSON, { nullable: true })
    json?: any;
}
