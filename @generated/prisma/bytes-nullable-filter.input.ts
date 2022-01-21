import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NestedBytesNullableFilter } from './nested-bytes-nullable-filter.input';

@InputType()
export class BytesNullableFilter {
    @Field(() => String, { nullable: true })
    equals?: Buffer;

    @Field(() => [String], { nullable: true })
    in?: Array<Buffer>;

    @Field(() => [String], { nullable: true })
    notIn?: Array<Buffer>;

    @Field(() => NestedBytesNullableFilter, { nullable: true })
    not?: NestedBytesNullableFilter;
}
