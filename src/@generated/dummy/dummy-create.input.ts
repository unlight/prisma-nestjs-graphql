import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

import { DummyCreatefriendsInput } from '../prisma/dummy-createfriends.input';

@InputType()
export class DummyCreateInput {
    @Field(() => String, { nullable: false })
    id!: string;

    @Field(() => Date, { nullable: true })
    created?: Date | string;

    @Field(() => Float, { nullable: false })
    floaty!: number;

    @Field(() => Int, { nullable: true })
    int?: number;

    @Field(() => Float, { nullable: true })
    float?: number;

    @Field(() => String, { nullable: true })
    bytes?: Buffer;

    @Field(() => GraphQLDecimal, { nullable: true })
    decimal?: any;

    @Field(() => String, { nullable: true })
    bigInt?: bigint | number;

    @Field(() => GraphQLJSON, { nullable: true })
    json?: any;

    @Field(() => DummyCreatefriendsInput, { nullable: true })
    friends?: DummyCreatefriendsInput;
}
