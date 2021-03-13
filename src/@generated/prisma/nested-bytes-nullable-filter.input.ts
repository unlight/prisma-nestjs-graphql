import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NestedBytesNullableFilter {
    @Field(() => String, { nullable: true })
    equals?: Buffer;

    @Field(() => NestedBytesNullableFilter, { nullable: true })
    not?: NestedBytesNullableFilter;
}
