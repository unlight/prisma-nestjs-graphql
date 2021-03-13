import { ArgsType, Field } from '@nestjs/graphql';

import { TagWhereUniqueInput } from './tag-where-unique.input';

@ArgsType()
export class FindUniqueTagArgs {
    @Field(() => TagWhereUniqueInput, { nullable: false })
    where!: TagWhereUniqueInput;
}
