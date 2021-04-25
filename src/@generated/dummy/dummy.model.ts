import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class Dummy {
    @Field(() => ID, { nullable: false })
    id!: string;

    @Field(() => Date, { nullable: false })
    created!: Date;

    @Field(() => Float, { nullable: false })
    floaty!: number;

    @Field(() => Int, { nullable: true })
    int!: number | null;

    @Field(() => Float, { nullable: true })
    float!: number | null;

    @Field(() => String, { nullable: true })
    bytes!: Buffer | null;

    @Field(() => GraphQLDecimal, { nullable: true })
    decimal!: any | null;

    @Field(() => String, { nullable: true })
    bigInt!: bigint | null;

    @Field(() => GraphQLJSON, { nullable: true })
    json!: any | null;
}
