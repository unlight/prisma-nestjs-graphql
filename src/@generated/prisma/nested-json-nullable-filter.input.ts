import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class NestedJsonNullableFilter {
    @Field(() => GraphQLJSON, { nullable: true })
    equals?: any;

    @Field(() => GraphQLJSON, { nullable: true })
    not?: any;
}
