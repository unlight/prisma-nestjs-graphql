import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NestedBigIntNullableFilter } from './nested-big-int-nullable-filter.input';

@InputType()
export class BigIntNullableFilter {

    @Field(() => String, {nullable:true})
    equals?: bigint | number;

    @Field(() => [String], {nullable:true})
    in?: Array<bigint> | Array<number>;

    @Field(() => [String], {nullable:true})
    notIn?: Array<bigint> | Array<number>;

    @Field(() => String, {nullable:true})
    lt?: bigint | number;

    @Field(() => String, {nullable:true})
    lte?: bigint | number;

    @Field(() => String, {nullable:true})
    gt?: bigint | number;

    @Field(() => String, {nullable:true})
    gte?: bigint | number;

    @Field(() => NestedBigIntNullableFilter, {nullable:true})
    not?: NestedBigIntNullableFilter;
}
