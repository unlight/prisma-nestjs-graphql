import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DummyCountAggregate {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => Int, { nullable: false })
    floaty!: number;

    @Field(() => Int, { nullable: true })
    int?: number;

    @Field(() => Int, { nullable: true })
    float?: number;

    @Field(() => Int, { nullable: true })
    bytes?: number;

    @Field(() => Int, { nullable: true })
    decimal?: number;

    @Field(() => Int, { nullable: true })
    bigInt?: number;

    @Field(() => Int, { nullable: true })
    json?: number;

    @Field(() => Int, { nullable: false })
    _all!: number;
}
