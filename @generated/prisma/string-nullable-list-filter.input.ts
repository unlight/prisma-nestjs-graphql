import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StringNullableListFilter {

    @Field(() => [String], {nullable:true})
    equals?: Array<string>;

    @Field(() => String, {nullable:true})
    has?: string;

    @Field(() => [String], {nullable:true})
    hasEvery?: Array<string>;

    @Field(() => [String], {nullable:true})
    hasSome?: Array<string>;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}
