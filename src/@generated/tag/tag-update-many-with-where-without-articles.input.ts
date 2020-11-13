import { Field, InputType } from '@nestjs/graphql';

import { TagScalarWhereInput } from './tag-scalar-where.input';
import { TagUpdateManyMutationInput } from './tag-update-many-mutation.input';

@InputType()
export class TagUpdateManyWithWhereWithoutArticlesInput {
    @Field(() => TagScalarWhereInput, {
        nullable: true,
        description: undefined,
    })
    where?: TagScalarWhereInput;

    @Field(() => TagUpdateManyMutationInput, {
        nullable: true,
        description: undefined,
    })
    data?: TagUpdateManyMutationInput;
}
