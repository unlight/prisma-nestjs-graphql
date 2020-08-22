import { Field, InputType } from '@nestjs/graphql';

import { TagWhereInput } from './tag-where.input';

@InputType({})
export class TagFilter {
    @Field(() => TagWhereInput, {
        nullable: true,
        description: undefined,
    })
    every?: TagWhereInput | TagWhereInput[] | null;

    @Field(() => TagWhereInput, {
        nullable: true,
        description: undefined,
    })
    some?: TagWhereInput | TagWhereInput[] | null;

    @Field(() => TagWhereInput, {
        nullable: true,
        description: undefined,
    })
    none?: TagWhereInput | TagWhereInput[] | null;
}
