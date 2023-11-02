import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';

@InputType()
export class UserRelationFilter {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    is?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    isNot?: UserWhereInput;
}
