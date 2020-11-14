import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class JsonFilter {
    @Field(() => GraphQLJSON, {
        nullable: true,
        description: undefined,
    })
    equals?: object | null;

    @Field(() => GraphQLJSON, {
        nullable: true,
        description: undefined,
    })
    not?: object | null;
}
