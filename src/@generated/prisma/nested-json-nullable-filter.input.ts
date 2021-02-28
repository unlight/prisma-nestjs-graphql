import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class NestedJsonNullableFilter {
    @Field(() => String, {
        nullable: true,
    })
    equals?: any;

    @Field(() => String, {
        nullable: true,
    })
    not?: any;
}
