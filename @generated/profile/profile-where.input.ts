import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UserWhereInput } from '../user/user-where.input';
import { Type } from 'class-transformer';

@InputType()
export class ProfileWhereInput {

    @Field(() => [ProfileWhereInput], {nullable:true})
    AND?: Array<ProfileWhereInput>;

    @Field(() => [ProfileWhereInput], {nullable:true})
    OR?: Array<ProfileWhereInput>;

    @Field(() => [ProfileWhereInput], {nullable:true})
    NOT?: Array<ProfileWhereInput>;

    @Field(() => IntFilter, {deprecationReason:'Use new name instead',nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    dummy?: StringNullableFilter;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    user?: UserWhereInput;
}
