import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleUpdateWithoutAuthorInput } from './article-update-without-author.input';

@InputType()
export class ArticleUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => ArticleWhereUniqueInput, {nullable:false})
    @Type(() => ArticleWhereUniqueInput)
    where!: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ArticleUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => ArticleUpdateWithoutAuthorInput)
    data!: ArticleUpdateWithoutAuthorInput;
}
