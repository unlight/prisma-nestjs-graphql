import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NestedBoolNullableFilter {
    @Field(() => Boolean, { nullable: true })
    equals?: boolean;

    @Field(() => NestedBoolNullableFilter, { nullable: true })
    not?: NestedBoolNullableFilter;
}
