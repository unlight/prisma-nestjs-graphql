import { Field, InputType } from '@nestjs/graphql';

import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class TagScalarWhereInput {
    @Field(() => [TagScalarWhereInput], {
        nullable: true,
    })
    AND?: TagScalarWhereInput | Array<TagScalarWhereInput>;

    @Field(() => [TagScalarWhereInput], {
        nullable: true,
    })
    OR?: TagScalarWhereInput | Array<TagScalarWhereInput>;

    @Field(() => [TagScalarWhereInput], {
        nullable: true,
    })
    NOT?: TagScalarWhereInput | Array<TagScalarWhereInput>;

    @Field(() => StringFilter, {
        nullable: true,
    })
    id?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
    })
    name?: StringFilter | string;
}
