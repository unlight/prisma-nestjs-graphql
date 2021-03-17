import { Field, InputType } from '@nestjs/graphql';

import { UserWhereInput } from './user-where.input';

@InputType()
export class UserRelationFilter {
    @Field(() => UserWhereInput, { nullable: true })
    is?: UserWhereInput;

    @Field(() => UserWhereInput, { nullable: true })
    isNot?: UserWhereInput;
}
