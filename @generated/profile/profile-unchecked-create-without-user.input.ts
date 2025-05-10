import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ProfileUncheckedCreateWithoutUserInput {

    @Field(() => Int, {deprecationReason:'Use new name instead',nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    dummy?: string;
}
