import { Field, InputType } from '@nestjs/graphql';

import { TagScalarWhereInput } from './tag-scalar-where.input';
import { TagUpdateManyDataInput } from './tag-update-many-data.input';

@InputType({})
export class TagUpdateManyWithWhereNestedInput {
    @Field(() => TagScalarWhereInput, {
        nullable: true,
        description: undefined,
    })
    where?: TagScalarWhereInput;

    @Field(() => TagUpdateManyDataInput, {
        nullable: true,
        description: undefined,
    })
    data?: TagUpdateManyDataInput;
}
