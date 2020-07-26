import { InputType, Field } from '@nestjs/graphql';
import { TagScalarWhereInput } from './tag-scalar-where.input';
import { TagUpdateManyDataInput } from './tag-update-many-data.input';

@InputType({})
export class TagUpdateManyWithWhereNestedInput {
    @Field(() => TagScalarWhereInput, {
        nullable: true,
        description: undefined,
    })
    where?: TagScalarWhereInput | null;

    @Field(() => TagUpdateManyDataInput, {
        nullable: true,
        description: undefined,
    })
    data?: TagUpdateManyDataInput | null;
}
