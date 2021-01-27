import { Field, InputType } from '@nestjs/graphql';

import { TagCreateOrConnectWithoutarticlesInput } from './tag-create-or-connect-withoutarticles.input';
import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagCreateManyWithoutArticlesInput {
    @Field(() => [TagCreateWithoutArticlesInput], {
        nullable: true,
    })
    create?: Array<TagCreateWithoutArticlesInput>;

    @Field(() => [TagWhereUniqueInput], {
        nullable: true,
    })
    connect?: Array<TagWhereUniqueInput>;

    @Field(() => [TagCreateOrConnectWithoutarticlesInput], {
        nullable: true,
    })
    connectOrCreate?: Array<TagCreateOrConnectWithoutarticlesInput>;
}
