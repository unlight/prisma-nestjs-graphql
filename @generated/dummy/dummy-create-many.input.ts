import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { GraphQLJSON } from 'graphql-type-json';
import { DummyCreateManyfriendsInput } from './dummy-create-manyfriends.input';

@InputType()
export class DummyCreateManyInput {
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

    @Field(() => DummyCreateManyfriendsInput, { nullable: true })
    friends?: DummyCreateManyfriendsInput;
}
