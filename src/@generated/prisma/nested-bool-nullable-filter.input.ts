import { InputType, Field } from '@nestjs/graphql';

@InputType({})
export class NestedBoolNullableFilter {
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
