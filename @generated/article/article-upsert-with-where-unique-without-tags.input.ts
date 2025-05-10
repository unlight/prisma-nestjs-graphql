import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleUpdateWithoutTagsInput } from './article-update-without-tags.input';
import { ArticleCreateWithoutTagsInput } from './article-create-without-tags.input';

@InputType()
export class ArticleUpsertWithWhereUniqueWithoutTagsInput {

    @Field(() => ArticleWhereUniqueInput, {nullable:false})
    @Type(() => ArticleWhereUniqueInput)
    where!: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ArticleUpdateWithoutTagsInput, {nullable:false})
    @Type(() => ArticleUpdateWithoutTagsInput)
    update!: ArticleUpdateWithoutTagsInput;

    @Field(() => ArticleCreateWithoutTagsInput, {nullable:false})
    @Type(() => ArticleCreateWithoutTagsInput)
    create!: ArticleCreateWithoutTagsInput;
}
