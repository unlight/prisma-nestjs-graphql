import { Field, InputType } from '@nestjs/graphql';

import { TagWhereInput } from './tag-where.input';

@InputType()
export class TagListRelationFilter {
    @Field(() => TagWhereInput, { nullable: true })
    every?: TagWhereInput;

    @Field(() => TagWhereInput, { nullable: true })
    some?: TagWhereInput;

    @Field(() => TagWhereInput, { nullable: true })
    none?: TagWhereInput;
}
