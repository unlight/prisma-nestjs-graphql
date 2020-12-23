import { ArgsType, Field } from '@nestjs/graphql';

import { TagWhereUniqueInput } from './tag-where-unique.input';

@ArgsType()
export class FindOneTagArgs {
    @Field(() => TagWhereUniqueInput, {
        nullable: true,
    })
    where?: TagWhereUniqueInput;
}
