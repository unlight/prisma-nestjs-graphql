import { InputType, Field } from '@nestjs/graphql';
import { TagWhereInput } from './tag-where.input';

@InputType({})
export class TagListRelationFilter {
    @Field(() => TagWhereInput, {
        nullable: true,
        description: undefined,
    })
    every?: TagWhereInput | null;

    @Field(() => TagWhereInput, {
        nullable: true,
        description: undefined,
    })
    some?: TagWhereInput | null;

    @Field(() => TagWhereInput, {
        nullable: true,
        description: undefined,
    })
    none?: TagWhereInput | null;
}
