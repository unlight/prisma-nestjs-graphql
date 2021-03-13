import { ArgsType, Field } from '@nestjs/graphql';

import { TagCreateManyInput } from './tag-create-many.input';

@ArgsType()
export class CreateManyTagArgs {
    @Field(() => [TagCreateManyInput], { nullable: false })
    data!: Array<TagCreateManyInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
