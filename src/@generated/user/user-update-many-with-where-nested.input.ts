import { InputType, Field } from '@nestjs/graphql';
import { UserScalarWhereInput } from './user-scalar-where.input';
import { UserUpdateManyDataInput } from './user-update-many-data.input';

@InputType({})
export class UserUpdateManyWithWhereNestedInput {
    @Field(() => UserScalarWhereInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserScalarWhereInput | null;

    @Field(() => UserUpdateManyDataInput, {
        nullable: true,
        description: undefined,
    })
    data?: UserUpdateManyDataInput | null;
}
