import { Field, InputType } from '@nestjs/graphql';

import { TagWhereInput } from './tag-where.input';

@InputType({})
export class TagListRelationFilter {
    @Field(() => TagWhereInput, {
        nullable: true,
        description: undefined,
    })
    every?: TagWhereInput;

    @Field(() => TagWhereInput, {
        nullable: true,
        description: undefined,
    })
    some?: TagWhereInput;

    @Field(() => TagWhereInput, {
        nullable: true,
        description: undefined,
    })
    none?: TagWhereInput;
}
