import { Field, InputType } from '@nestjs/graphql';

import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';
import { TagScalarWhereInput } from './tag-scalar-where.input';
import { TagUpdateManyWithWhereNestedInput } from './tag-update-many-with-where-nested.input';
import { TagUpdateWithWhereUniqueWithoutArticlesInput } from './tag-update-with-where-unique-without-articles.input';
import { TagUpsertWithWhereUniqueWithoutArticlesInput } from './tag-upsert-with-where-unique-without-articles.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType({})
export class TagUpdateManyWithoutArticlesInput {
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

    @Field(() => [TagWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    set?: TagWhereUniqueInput | TagWhereUniqueInput[] | null;

    @Field(() => [TagWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[] | null;

    @Field(() => [TagWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[] | null;

    @Field(() => [TagUpdateWithWhereUniqueWithoutArticlesInput], {
        nullable: true,
        description: undefined,
    })
    update?:
        | TagUpdateWithWhereUniqueWithoutArticlesInput
        | TagUpdateWithWhereUniqueWithoutArticlesInput[]
        | null;

    @Field(() => [TagUpdateManyWithWhereNestedInput], {
        nullable: true,
        description: undefined,
    })
    updateMany?: TagUpdateManyWithWhereNestedInput | TagUpdateManyWithWhereNestedInput[] | null;

    @Field(() => [TagScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[] | null;

    @Field(() => [TagUpsertWithWhereUniqueWithoutArticlesInput], {
        nullable: true,
        description: undefined,
    })
    upsert?:
        | TagUpsertWithWhereUniqueWithoutArticlesInput
        | TagUpsertWithWhereUniqueWithoutArticlesInput[]
        | null;
}
