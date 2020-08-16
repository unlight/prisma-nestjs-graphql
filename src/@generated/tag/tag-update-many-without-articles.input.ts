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
    create?: TagCreateWithoutArticlesInput[] | null;

    @Field(() => [TagWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: TagWhereUniqueInput[] | null;

    @Field(() => [TagWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    set?: TagWhereUniqueInput[] | null;

    @Field(() => [TagWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    disconnect?: TagWhereUniqueInput[] | null;

    @Field(() => [TagWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    delete?: TagWhereUniqueInput[] | null;

    @Field(() => [TagUpdateWithWhereUniqueWithoutArticlesInput], {
        nullable: true,
        description: undefined,
    })
    update?: TagUpdateWithWhereUniqueWithoutArticlesInput[] | null;

    @Field(() => [TagUpdateManyWithWhereNestedInput], {
        nullable: true,
        description: undefined,
    })
    updateMany?: TagUpdateManyWithWhereNestedInput[] | null;

    @Field(() => [TagScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    deleteMany?: TagScalarWhereInput[] | null;

    @Field(() => [TagUpsertWithWhereUniqueWithoutArticlesInput], {
        nullable: true,
        description: undefined,
    })
    upsert?: TagUpsertWithWhereUniqueWithoutArticlesInput[] | null;
}
