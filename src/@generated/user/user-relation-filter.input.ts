import { Field, InputType } from '@nestjs/graphql';

import { UserWhereInput } from './user-where.input';

@InputType({})
export class UserRelationFilter {
    @Field(() => UserWhereInput, {
        nullable: true,
        description: undefined,
    })
    is?: UserWhereInput | null;

    @Field(() => UserWhereInput, {
        nullable: true,
        description: undefined,
    })
    isNot?: UserWhereInput | null;
}
