import { Field, InputType } from '@nestjs/graphql';

import { NestedBytesNullableFilter } from './nested-bytes-nullable-filter.input';

@InputType()
export class BytesNullableFilter {
    @Field(() => String, { nullable: true })
    equals?: Buffer;

    @Field(() => NestedBytesNullableFilter, { nullable: true })
    not?: NestedBytesNullableFilter;
}
