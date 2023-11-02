import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input';

@InputType()
export class ProfileNullableRelationFilter {

    @Field(() => ProfileWhereInput, {nullable:true})
    is?: ProfileWhereInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    isNot?: ProfileWhereInput;
}
