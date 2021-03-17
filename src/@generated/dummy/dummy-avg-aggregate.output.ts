import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DummyAvgAggregate {
    @Field(() => Float, { nullable: false })
    floaty!: number;

    @Field(() => Float, { nullable: true })
    int?: number;

    @Field(() => Float, { nullable: true })
    float?: number;

    @Field(() => String, { nullable: true })
    decimal?: number | string;

    @Field(() => Float, { nullable: true })
    bigInt?: number;
}
