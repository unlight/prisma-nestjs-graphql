import { Field, InputType } from '@nestjs/graphql';

import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UserWhereInput } from '../user/user-where.input';

@InputType()
export class ProfileWhereInput {
    @Field(() => [ProfileWhereInput], { nullable: true })
    AND?: Array<ProfileWhereInput>;

    @Field(() => [ProfileWhereInput], { nullable: true })
    OR?: Array<ProfileWhereInput>;

    @Field(() => [ProfileWhereInput], { nullable: true })
    NOT?: Array<ProfileWhereInput>;

    @Field(() => IntFilter, { nullable: true })
    id?: IntFilter;

    @Field(() => UserWhereInput, { nullable: true })
    user?: UserWhereInput;

    @Field(() => StringFilter, { nullable: true })
    userId?: StringFilter;

    @Field(() => StringNullableFilter, { nullable: true })
    dummy?: StringNullableFilter;
}
