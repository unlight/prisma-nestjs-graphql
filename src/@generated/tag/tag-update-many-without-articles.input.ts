import { Field, InputType } from '@nestjs/graphql';

import { TagCreateOrConnectWithoutarticlesInput } from './tag-create-or-connect-withoutarticles.input';
import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';
import { TagScalarWhereInput } from './tag-scalar-where.input';
import { TagUpdateManyWithWhereWithoutArticlesInput } from './tag-update-many-with-where-without-articles.input';
import { TagUpdateWithWhereUniqueWithoutArticlesInput } from './tag-update-with-where-unique-without-articles.input';
import { TagUpsertWithWhereUniqueWithoutArticlesInput } from './tag-upsert-with-where-unique-without-articles.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagUpdateManyWithoutArticlesInput {
    @Field(() => [TagCreateWithoutArticlesInput], {
        nullable: true,
    })
    create?:
        | TagCreateWithoutArticlesInput
        | Array<TagCreateWithoutArticlesInput>;

    @Field(() => [TagWhereUniqueInput], {
        nullable: true,
    })
    connect?: TagWhereUniqueInput | Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], {
        nullable: true,
    })
    set?: TagWhereUniqueInput | Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], {
        nullable: true,
    })
    disconnect?: TagWhereUniqueInput | Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], {
        nullable: true,
    })
    delete?: TagWhereUniqueInput | Array<TagWhereUniqueInput>;

    @Field(() => [TagUpdateWithWhereUniqueWithoutArticlesInput], {
        nullable: true,
    })
    update?:
        | TagUpdateWithWhereUniqueWithoutArticlesInput
        | Array<TagUpdateWithWhereUniqueWithoutArticlesInput>;

    @Field(() => [TagUpdateManyWithWhereWithoutArticlesInput], {
        nullable: true,
    })
    updateMany?:
        | TagUpdateManyWithWhereWithoutArticlesInput
        | Array<TagUpdateManyWithWhereWithoutArticlesInput>;

    @Field(() => [TagScalarWhereInput], {
        nullable: true,
    })
    deleteMany?: TagScalarWhereInput | Array<TagScalarWhereInput>;

    @Field(() => [TagUpsertWithWhereUniqueWithoutArticlesInput], {
        nullable: true,
    })
    upsert?:
        | TagUpsertWithWhereUniqueWithoutArticlesInput
        | Array<TagUpsertWithWhereUniqueWithoutArticlesInput>;

    @Field(() => [TagCreateOrConnectWithoutarticlesInput], {
        nullable: true,
    })
    connectOrCreate?:
        | TagCreateOrConnectWithoutarticlesInput
        | Array<TagCreateOrConnectWithoutarticlesInput>;
}
