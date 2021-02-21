import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class JsonFilter {
    @Field(() => GraphQLJSON, {
        nullable: true,
    })
    equals?: Record<string, any>;

    @Field(() => GraphQLJSON, {
        nullable: true,
    })
    not?: Record<string, any>;
}
