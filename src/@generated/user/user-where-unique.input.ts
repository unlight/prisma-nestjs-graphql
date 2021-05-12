import { Field, InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import * as Scalars from 'graphql-scalars';

@InputType()
export class UserWhereUniqueInput {
    @Field(() => String, { nullable: true })
    id?: string;

    @Field(() => Scalars.GraphQLEmailAddress, { nullable: true })
    email?: string;

    @Field(() => String, { nullable: true })
    @Validator.MinLength(3)
    @Validator.MaxLength(50)
    name?: string;
}
