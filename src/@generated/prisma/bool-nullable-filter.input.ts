import { InputType, Field } from '@nestjs/graphql';
import { NestedBoolNullableFilter } from './nested-bool-nullable-filter.input';

@InputType({})
export class BoolNullableFilter {
    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    equals?: boolean | null;

    @Field(() => NestedBoolNullableFilter, {
        nullable: true,
        description: undefined,
    })
    not?: NestedBoolNullableFilter | null;
}
