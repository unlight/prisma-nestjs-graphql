import { Field, InputType } from '@nestjs/graphql';

import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class TagScalarWhereInput {
    @Field(() => [TagScalarWhereInput], { nullable: true })
    AND?: Array<TagScalarWhereInput>;

    @Field(() => [TagScalarWhereInput], { nullable: true })
    OR?: Array<TagScalarWhereInput>;

    @Field(() => [TagScalarWhereInput], { nullable: true })
    NOT?: Array<TagScalarWhereInput>;

    @Field(() => StringFilter, { nullable: true })
    id?: StringFilter;

    @Field(() => StringFilter, { nullable: true })
    name?: StringFilter;
}
