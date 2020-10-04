import { Field, InputType } from '@nestjs/graphql';

import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';
import { TagScalarWhereInput } from './tag-scalar-where.input';
import { TagUpdateManyWithWhereNestedInput } from './tag-update-many-with-where-nested.input';
import { TagUpdateWithWhereUniqueWithoutArticlesInput } from './tag-update-with-where-unique-without-articles.input';
import { TagUpsertWithWhereUniqueWithoutArticlesInput } from './tag-upsert-with-where-unique-without-articles.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagUpdateManyWithoutArticlesInput {
    @Field(() => [TagCreateWithoutArticlesInput], {
        nullable: true,
        description: undefined,
    })
    create?: TagCreateWithoutArticlesInput | Array<TagCreateWithoutArticlesInput>;

    @Field(() => [TagWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: TagWhereUniqueInput | Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    set?: TagWhereUniqueInput | Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    disconnect?: TagWhereUniqueInput | Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    delete?: TagWhereUniqueInput | Array<TagWhereUniqueInput>;

    @Field(() => [TagUpdateWithWhereUniqueWithoutArticlesInput], {
        nullable: true,
        description: undefined,
    })
    update?:
        | TagUpdateWithWhereUniqueWithoutArticlesInput
        | Array<TagUpdateWithWhereUniqueWithoutArticlesInput>;

    @Field(() => [TagUpdateManyWithWhereNestedInput], {
        nullable: true,
        description: undefined,
    })
    updateMany?: TagUpdateManyWithWhereNestedInput | Array<TagUpdateManyWithWhereNestedInput>;

    @Field(() => [TagScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    deleteMany?: TagScalarWhereInput | Array<TagScalarWhereInput>;

    @Field(() => [TagUpsertWithWhereUniqueWithoutArticlesInput], {
        nullable: true,
        description: undefined,
    })
    upsert?:
        | TagUpsertWithWhereUniqueWithoutArticlesInput
        | Array<TagUpsertWithWhereUniqueWithoutArticlesInput>;
}
