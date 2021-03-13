import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DummyMaxAggregate {
    @Field(() => String, { nullable: true })
    id?: string;

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
}
