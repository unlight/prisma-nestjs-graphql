import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';

@InputType()
export class UserListRelationFilter {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    every?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    some?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    none?: UserWhereInput;
}
