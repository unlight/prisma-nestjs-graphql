import { Field, InputType } from '@nestjs/graphql';

import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';
import { TagUncheckedCreateWithoutArticlesInput } from './tag-unchecked-create-without-articles.input';
import { TagUncheckedUpdateWithoutArticlesInput } from './tag-unchecked-update-without-articles.input';
import { TagUpdateWithoutArticlesInput } from './tag-update-without-articles.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagUpsertWithWhereUniqueWithoutArticlesInput {
    @Field(() => TagWhereUniqueInput, {
        nullable: false,
    })
    where!: TagWhereUniqueInput;

    @Field(() => TagUpdateWithoutArticlesInput, {
        nullable: false,
    })
    update!: TagUpdateWithoutArticlesInput | TagUncheckedUpdateWithoutArticlesInput;

    @Field(() => TagCreateWithoutArticlesInput, {
        nullable: false,
    })
    create!: TagCreateWithoutArticlesInput | TagUncheckedCreateWithoutArticlesInput;
}
