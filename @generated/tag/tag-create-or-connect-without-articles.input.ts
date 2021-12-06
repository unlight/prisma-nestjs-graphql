import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';

@InputType()
export class TagCreateOrConnectWithoutArticlesInput {
    @Field(() => TagWhereUniqueInput, { nullable: false })
    where!: TagWhereUniqueInput;

    @Field(() => TagCreateWithoutArticlesInput, { nullable: false })
    create!: TagCreateWithoutArticlesInput;
}
