import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';

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
