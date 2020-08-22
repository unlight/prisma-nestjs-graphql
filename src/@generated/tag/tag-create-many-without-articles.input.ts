import { Field, InputType } from '@nestjs/graphql';

import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType({})
export class TagCreateManyWithoutArticlesInput {
    @Field(() => [TagCreateWithoutArticlesInput], {
        nullable: true,
        description: undefined,
    })
    create?: TagCreateWithoutArticlesInput | TagCreateWithoutArticlesInput[] | null;

    @Field(() => [TagWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[] | null;
}
