import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NestedDecimalNullableFilter {
    @Field(() => String, { nullable: true })
    equals?: number | string;

    @Field(() => [String], { nullable: true })
    in?: Array<number> | Array<string>;

    @Field(() => [String], { nullable: true })
    notIn?: Array<number> | Array<string>;

    @Field(() => String, { nullable: true })
    lt?: number | string;

    @Field(() => String, { nullable: true })
    lte?: number | string;

    @Field(() => String, { nullable: true })
    gt?: number | string;

    @Field(() => String, { nullable: true })
    gte?: number | string;

    @Field(() => NestedDecimalNullableFilter, { nullable: true })
    not?: NestedDecimalNullableFilter;
}
